let usersData = [];
let qrSprite;
let spinButton;
let spinNumber = 0;
let spinNumberText;

const rewardList = [
  { val: -1, label: "Rolex", weight: 1 },
  { val: -2, label: "Thanks", weight: 100 },
  { val: -3, label: "50 Coin", weight: 300 },
  { val: -4, label: "70 Coin", weight: 300 },
  { val: 3, label: "Aojiru", weight: 300 },
  { val: 1, label: "20 USD", weight: 300 },
  { val: 2, label: "10 USD", weight: 300 },
  { val: 0, label: "iPhone 15", weight: 1 },
];

function preload() {
  this.load.audio("introSound", "assets/audios/intro.mp3");
  this.load.audio("collectSound", "assets/audios/collect.mp3");
  this.load.audio("spinSound", "assets/audios/spinSound.mp3");

  this.load.image("background", "assets/images/background.png");
  this.load.image("wheel", "assets/images/wheel.png");
  this.load.image("bgWheelTop", "assets/images/bgWheelTop.png");
  this.load.image("bgWheel", "assets/images/bgWheel.png");
  this.load.image("pin", "assets/images/pin.png");
  this.load.image("spinButton", "assets/images/spinButton.png");
  this.load.image("spinButtonDown", "assets/images/spinButtonDown.png");
  this.load.image("bgReward", "assets/images/blur.png");
  this.load.image("box", "assets/images/box.png");
  this.load.image("btnClaim", "assets/images/btnClaim.png");

  this.load.image("icSound", "assets/images/sound.png");
  this.load.image("icSoundOff", "assets/images/soundOff.png");
  this.load.image("bgCoin", "assets/images/bgCoin.png");
  // this.load.image('bgCoin2', 'assets/images/bgCoin2.png');

  this.load.spritesheet("firework", "assets/images/firework.png", {
    frameWidth: 480,  // Width of each frame
    frameHeight: 480  // Height of each frame
  });

}

function create() {
  let isMuted = true;

  getSpinNumber.call();

  const introSound = this.sound.add("introSound");
  const collectSound = this.sound.add("collectSound");
  const spinSound = this.sound.add("spinSound");

  this.anims.create({
    key: "fireworkAnim",
    frames: this.anims.generateFrameNumbers("firework", { start: 0, end: 9 }),
    frameRate: 10,
    repeat: -1
  });

  // Set the background image
  this.add
    .image(this.cameras.main.centerX, this.cameras.main.centerY, "background")
    .setOrigin(0.5, 0.5)
    .setDisplaySize(this.cameras.main.width, this.cameras.main.height);

  const icSoundOff = this.add.sprite(
    this.cameras.main.width / 2,
    this.cameras.main.height / 2,
    "icSoundOff"
  );
  icSoundOff.setPosition(this.cameras.main.width - 12, 12);
  icSoundOff.setOrigin(1, -0.1);
  icSoundOff.setScale(0.5);

  const icSound = this.add.sprite(
    this.cameras.main.width / 2,
    this.cameras.main.height / 2,
    "icSound"
  );
  icSound.setPosition(this.cameras.main.width - 12, 12);
  icSound.setOrigin(1, -0.1);
  icSound.setScale(0.5);

  const bgCoin = this.add.sprite(
    icSound.x - icSound.displayWidth - 10,
    icSound.y,
    "bgCoin"
  );
  bgCoin.setOrigin(1, 0);
  bgCoin.setScale(0.3);
  bgCoin.setInteractive();

  bgCoin.on("pointerdown", () => {
    localStorage.setItem("spinNumber", 2);
    getSpinNumber.call();
    spinNumberText.setText(`${spinNumber}`);
  });

  // const bgCoin2 = this.add.sprite(bgCoin.x - bgCoin.displayWidth - 10, bgCoin.y, 'bgCoin2');
  // bgCoin2.setOrigin(1, 0); // Keep the same origin
  // bgCoin2.setScale(0.5);

  const bgWheelTop = this.add.sprite(
    this.cameras.main.width / 2,
    160,
    "bgWheelTop"
  );
  bgWheelTop.setScale(0.65);
  bgWheelTop.setOrigin(0.5, 0.5);

  const wheel = this.add.sprite(this.cameras.main.width / 2, 320, "wheel");
  wheel.setScale(0.33);
  wheel.setOrigin(0.5, 0.5);

  // Position the wheel at the top of the screen
  const bgWheel = this.add.sprite(this.cameras.main.width / 2, 320, "bgWheel");
  bgWheel.setScale(0.67);
  bgWheel.setOrigin(0.5, 0.5);

  // Add the pin
  // const pin = this.add.sprite(wheel.x, wheel.y, 'pin');
  // pin.setDisplaySize(56, 56);

  spinNumberText = this.add.text(
    this.cameras.main.width / 2,
    this.cameras.main.height - 250,
    `${spinNumber}`,
    { font: "24px Arial", fill: "#000000" }
  );
  spinNumberText.setOrigin(0.5, 1);

  // Position the spinButton above the user list block
  spinButton = this.add.sprite(
    this.cameras.main.width / 2,
    this.cameras.main.height - 100,
    "spinButton"
  ); // Adjust Y position as needed
  spinButton.setScale(0.4);
  spinButton.setOrigin(0.5, 1); // Set origin to bottom center so it aligns to the top of the block
  spinButton.setInteractive();

  // Set button click to spin the wheel
  spinButton.on("pointerdown", () => {
    // validateBeforeSpin.call();
    spinButton.setTexture("spinButtonDown");
  });

  spinButton.on("pointerup", spinWheel.bind(this, wheel, spinSound, collectSound, showToast));

  spinButton.on("pointerout", () => {
    spinButton.setTexture("spinButton"); // Reset if pointer leaves button area
  });

  icSound.setInteractive();
  icSound.on("pointerdown", () => {
    isMuted = !isMuted;
    introSound.setMute(isMuted); // Mute or unmute the sound
    collectSound.setMute(isMuted);
    spinSound.setMute(isMuted);

    // Optionally change the sound icon based on the mute state
    if (isMuted) {
      icSound.setTexture("icSound"); // Assuming 'icSoundOff' is an icon for sound off
    } else {
      icSound.setTexture("icSoundOff"); // Switch back to the original icon
      introSound.play();
    }
  });
}

function update() {
  // Update the scene if necessary
}

const config = {
  type: Phaser.AUTO,
  width: Math.min(480, window.innerWidth),
  height: window.innerHeight,
  parent: "game-container",
  scene: { preload, create, update },
};

const game = new Phaser.Game(config);

function spinWheel(wheel, spinSound, collectSound, showToast) {
  // validateBeforeSpin.call();

  if(spinNumber < 1){
    showToast("Please Top up to spin!");
    return
  }


  spinButton.setTexture("spinButton"); // Reset to default state
  spinButton.disableInteractive();
  const selectedReward = getWeightedReward(rewardList); // Select weighted reward

  const segmentIndex = rewardList.indexOf(selectedReward);
  const degreesPerSegment = 360 / rewardList.length;
  const halfSegmentOffset = degreesPerSegment / 2; // Add half-segment for better alignment
  const finalDegrees = segmentIndex * degreesPerSegment + halfSegmentOffset;

  const rounds = Phaser.Math.Between(2, 4);
  const totalAngle = 360 * rounds + finalDegrees; // Ensure it lands on the correct segment

  this.tweens.add({
    targets: wheel,
    angle: totalAngle,
    ease: Phaser.Math.Easing.Cubic.Out, // Use correct Phaser easing function
    duration: Phaser.Math.Between(4000, 5000),
    onStart: () => spinSound.play(),
    onComplete: () => {
      spinSound.stop();
      collectSound.play();
      console.log("Winning Reward:", selectedReward.label);
      showToast(selectedReward.label);
      showPopup.call(this, selectedReward.label);
      
    },
  });
}

function getWeightedReward(rewardList) {
  const totalWeight = rewardList.reduce(
    (sum, reward) => sum + reward.weight,
    0
  );
  let random = Math.random() * totalWeight; // Random float between 0 and totalWeight

  for (const reward of rewardList) {
    if (random < reward.weight) {
      return reward;
    }
    random -= reward.weight;
  }
}


function determineWinningSegment(angle) {
  const segmentCount = rewardList.length; // Matches the rewardList length
  const degreesPerSegment = 360 / segmentCount;

  // Normalize the angle within 0-360 degrees
  const normalizedAngle = (angle + 360) % 360;

  // Calculate the segment index (adjust offset if segment 0 isn't at the top)
  const segmentIndex = Math.floor(
    ((normalizedAngle + degreesPerSegment / 2) % 360) / degreesPerSegment
  );

  return segmentIndex;
}

function showPopup(reward) {
  
  generateQR.call(this, 'https://example.com');

  // Create the firework sprite and play the animation at the center of the screen
  const firework = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY, "firework");
  firework.play("fireworkAnim");

  // Add the popup background image
  const popupBackground = this.add.image(
    this.cameras.main.centerX,
    this.cameras.main.centerY,
    "bgReward"
  );
  popupBackground.setOrigin(0.5, 0.5);
  popupBackground.setDisplaySize(
    this.cameras.main.width,
    this.cameras.main.height
  );

  const box = this.add.sprite(
    this.cameras.main.width / 2,
    this.cameras.main.height - 450,
    "box"
  );
  box.setOrigin(0.5, 0.5);
  box.setScale(0.6);

  const style = { font: "20px Arial", fill: "#ffffff", align: "center" };
  const text = this.add.text(
    this.cameras.main.centerX,
    box.y - box.displayHeight + 130,
    `Congratulations!\nYou won ${reward}`,
    style
  );
  text.setOrigin(0.5, 0.5);

  const btnClaim = this.add.image(
    this.cameras.main.centerX,
    this.cameras.main.height - 100,
    "btnClaim"
  );
  btnClaim.setOrigin(0.5, 0.5);
  btnClaim.setScale(0.5);
  btnClaim.setInteractive();

  // Cleanup function to remove popup elements
  btnClaim.on("pointerdown", () => {
    popupBackground.destroy(); // Remove the popup
    text.destroy();
    box.destroy();
    btnClaim.destroy();
    firework.destroy(); // Optional: remove firework when claiming
    // Add more logic here if needed, like moving to another scene

    if (qrSprite) {
      qrSprite.destroy();  // Destroy the QR code sprite
      qrSprite = null;     // Reset the variable

      // Remove the texture to free up resources
      if (this.textures.exists('qrCanvas')) {
        this.textures.remove('qrCanvas');
      }
    }

    spinButton.setInteractive();
    minusSpinNumber.call();
  });
}


function showStartDialog(introSound) {
  // Create a semi-transparent black overlay
  const overlay = this.add.graphics();
  overlay.fillStyle(0x000000, 0.5);
  overlay.fillRect(0, 0, this.cameras.main.width, this.cameras.main.height);

  // Create a white dialog box
  const dialogBox = this.add.graphics();
  dialogBox.fillStyle(0xffffff, 1);
  dialogBox.fillRoundedRect(50, 200, this.cameras.main.width - 100, 200, 10);

  // Add dialog text
  const dialogText = this.add.text(
    this.cameras.main.centerX,
    250,
    "LUCKY SPIN",
    { font: "24px Arial", fill: "#000000" }
  );
  dialogText.setOrigin(0.5, 0.5);

  const dialogDesc = this.add.text(
    this.cameras.main.centerX,
    280,
    "Click on button to start.",
    { font: "16px Arial", fill: "#999" }
  );
  dialogDesc.setOrigin(0.5, 0.5);

  // Create a button background
  const startButtonBackground = this.add.graphics();
  const buttonWidth = 100;
  const buttonHeight = 40;
  startButtonBackground.fillStyle(0x007bff, 1);
  startButtonBackground.fillRoundedRect(
    this.cameras.main.centerX - buttonWidth / 2,
    340,
    buttonWidth,
    buttonHeight,
    5
  );

  // Add the start button text
  const startButton = this.add.text(this.cameras.main.centerX, 360, "Start", {
    font: "20px Arial",
    fill: "#FFFFFF",
  });
  startButton.setOrigin(0.5, 0.5);
  startButton.setInteractive();

  // Function to remove all dialog elements
  const closeDialog = () => {
    overlay.destroy();
    dialogBox.destroy();
    dialogText.destroy();
    dialogDesc.destroy();
    startButtonBackground.destroy();
    startButton.destroy();
    introSound.play({ loop: true });
  };

  // Set interactive for overlay to close the dialog when clicked
  overlay.setInteractive().on("pointerdown", closeDialog);

  // Set interactive for button and close dialog on click
  startButton.on("pointerdown", closeDialog);
}

function generateQR(link){
  const qr = new QRious({
    value: link, // The data for the QR code
    size: 120                      // Size of the QR code
  });

  // Convert QR code to Phaser texture
  const qrImage = new Image();
  qrImage.src = qr.toDataURL();

  qrImage.onload = () => {
    // Create a new canvas to copy the QR code image
    const canvas = this.textures.createCanvas('qrCanvas', qrImage.width, qrImage.height);
    const context = canvas.context;

    // Draw the QR code on the canvas
    context.drawImage(qrImage, 0, 0);

    // Refresh the canvas to update Phaser’s texture system
    canvas.refresh();

    // Create a sprite using the canvas texture
    qrSprite = this.add.image(this.scale.width / 2 + 60, this.scale.height / 2 + 72, 'qrCanvas');
    qrSprite.setOrigin(1, 0.5);  // Center the sprite
  };

  // Handle any errors
  qrImage.onerror = () => {
    console.error('Failed to load QR code image.');
  };
}

function getSpinNumber(){
  const storedSpinValue = localStorage.getItem('spinNumber');
  if(storedSpinValue){
    spinNumber = storedSpinValue
  }

  if(spinButton){
    if(spinNumber == 0){
      spinButton.disableInteractive();
    }else{
      spinButton.setInteractive();
    }
  }
}

function minusSpinNumber(){
  if(spinNumber && spinNumber > 0){
    spinNumber = spinNumber-1
  }else{
    spinNumber = 0
  }
  if(spinButton){
    if(spinNumber == 0){
      spinButton.disableInteractive();
    }else{
      spinButton.setInteractive();
    }
  }
  
  localStorage.setItem("spinNumber", spinNumber);
  spinNumberText.setText(`${spinNumber}`);
}

function validateBeforeSpin(){
  if(spinNumber < 1){
    showToast("Please Top up to spin!");
    return
  }
}

// Function to show toast message
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000); // Hide after 3 seconds
}