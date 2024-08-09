// Function to check and lock orientation
function lockOrientation() {
    if (screen.orientation && screen.orientation.lock) {
        screen.orientation.lock('landscape').catch(err => {
            console.warn('Orientation lock failed:', err);
        });
    } else {
        // Fallback for browsers that don't support screen.orientation.lock
        if (window.innerWidth < window.innerHeight) {
            alert('Please rotate your device to landscape mode');
        }
    }
}

// Add an event listener for orientation changes
window.addEventListener('resize', () => {
    if (window.innerWidth < window.innerHeight) {
        alert('Please rotate your device to landscape mode');
        // Optionally, you can reload the page or adjust your game's layout
        // location.reload();
    }
});

const rewardList = [
    { val: -1, label: "5USD" },
    { val: -2, label: "20USD" },
    { val: -3, label: "Discount 10%" },
    { val: 0, label: "Thanks" },
    { val: 1, label: "50 Points" },
    { val: 2, label: "100 Points" }
];

function preload() {
    this.load.audio('collectSound', 'assets/audios/collect.mp3');
    this.load.audio('spinSound', 'assets/audios/spinSound.mp3');

    this.load.image('background', 'assets/images/background.png');
    this.load.image('wheel', 'assets/images/wheel.png');
    this.load.image('bgWheel', 'assets/images/bgWheel.png');
    this.load.image('pin', 'assets/images/pin.png');
    this.load.image('spinButton', 'assets/images/spinButton.png');
    this.load.image('bgReward', 'assets/images/backgroundReward.png');
    this.load.image('box', 'assets/images/box.png');
    this.load.image('btnClaim', 'assets/images/btnClaim.png');
    
}

function create() {
    const collectSound = this.sound.add("collectSound");
    const spinSound = this.sound.add("spinSound");


    // Function to show toast message
    function showToast(message) {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000); // Hide after 3 seconds
    }

    // Set the background image
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'background')
        .setOrigin(0.5, 0.5)
        .setDisplaySize(this.cameras.main.width, this.cameras.main.height);

    const bgWheel = this.add.sprite(this.cameras.main.width / 2, 250, 'bgWheel');
    bgWheel.setScale(0.55);
    bgWheel.setOrigin(0.5, 0.5);
    
    // Add the wheel
    const wheel = this.add.sprite(this.cameras.main.width / 2, 250, 'wheel');
    wheel.setScale(0.35);
    wheel.setOrigin(0.5, 0.5);

    // Add the pin
    const pin = this.add.sprite(wheel.x, wheel.y, 'pin');
    pin.setDisplaySize(100, 100);

    // Add the button below the wheel
    const spinButton = this.add.sprite(this.cameras.main.width / 2, bgWheel.y + bgWheel.displayHeight / 2 + 50, 'spinButton');
    spinButton.setScale(0.4);
    spinButton.setOrigin(0.5, 0.5);
    spinButton.setInteractive();

    // Set button click to spin the wheel
    spinButton.on('pointerdown', () => {
        spinSound.play();
        spinWheel.call(this, wheel, spinSound, collectSound, showToast);
    });
}

function update() {
    // Update the scene if necessary
}

const config = {
    type: Phaser.AUTO,
    width: Math.min(480, window.innerWidth), // Set max-width to 480
    height: window.innerHeight, // Set height to 100%
    parent: 'game-container',
    scene: { preload, create, update } // Use the functions directly as scene methods
};

const game = new Phaser.Game(config);

function spinWheel(wheel, spinSound, collectSound, showToast) {
    const rounds = Phaser.Math.Between(2, 4); // Random rounds to spin
    let degrees = Phaser.Math.Between(0, 360); // Random final position

    // Define the angle range to avoid, e.g., segment 3 between 90 and 135 degrees
    const avoidSegmentStart = 90;
    const avoidSegmentEnd = 135;

    // If the random angle falls within the avoid range, shift it out of that range
    if (degrees >= avoidSegmentStart && degrees <= avoidSegmentEnd) {
        degrees = (degrees + (avoidSegmentEnd - avoidSegmentStart + 1)) % 360;
    }

    const totalAngle = 360 * rounds + degrees;

    this.tweens.add({
        targets: wheel,
        angle: totalAngle,
        ease: 'Cubic.easeOut',
        duration: Phaser.Math.Between(4000, 5000), //Generate a random duration between 4000ms and 5000ms
        onComplete: () => {
            spinSound.stop();
            collectSound.play();
            const winningSegment = determineWinningSegment(wheel.angle % 360);

            let winIndex = rewardList.findIndex(item => item.val == winningSegment);
            // console.log("Winning Segment: ", winIndex > -1 ? rewardList[winIndex].label : "Thanks");

            // showToast(`${winIndex > -1 ? rewardList[winIndex].label : "Thanks"}`);
            showPopup.call(this, winIndex > -1 ? rewardList[winIndex].label : "Thanks");
        }
    });
}

function determineWinningSegment(angle) {
    // Logic to determine the winning segment based on the angle
    const segmentCount = 6;
    const degreesPerSegment = 360 / segmentCount;
    return Math.floor(angle / degreesPerSegment);
}

function showPopup(reward) {
    // Add the popup background image
    const popupBackground = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'bgReward');
    popupBackground.setOrigin(0.5, 0.5);
    popupBackground.setDisplaySize(this.cameras.main.width, this.cameras.main.height);

    const box = this.add.sprite(this.cameras.main.width / 2, this.cameras.main.height / 2, 'box');
    box.setOrigin(0.5, 0.5);

    const style = { font: '20px Arial', fill: '#ffffff', align: 'center' };
    const text = this.add.text(this.cameras.main.centerX, box.y - box.displayHeight + 30, `Congratulations!\nYou won ${reward}`, style);
    text.setOrigin(0.5, 0.5);

    const btnClaim = this.add.image(this.cameras.main.centerX, this.cameras.main.height - 50, 'btnClaim');
    btnClaim.setOrigin(0.5, 0.5);
    btnClaim.setInteractive();

    btnClaim.on('pointerdown', () => {
        popupBackground.destroy(); // Remove the popup
        text.destroy();
        box.destroy();
        btnClaim.destroy();
        // Add more logic here if needed, like moving to another scene
    });
}
