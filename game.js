const rewardList = [
    { val: -1, label: "5USD" },
    { val: -2, label: "20USD" },
    { val: -3, label: "Discount 10%" },
    { val: 0, label: "Thanks" },
    { val: 1, label: "50 Points" },
    { val: 2, label: "100 Points" }
];

class LoadingScene extends Phaser.Scene {
    constructor() {
        super({ key: 'LoadingScene' });
    }

    preload() {
        // Add a simple loading text or graphic
        // this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, 'Loading...', {
        //     font: '32px Arial', fill: '#ffffff'
        // }).setOrigin(0.5, 0.5);

        this.load.image('loadingBackground', 'loadingBackground.png');

        // Load assets for the main scene
        this.load.image('background', 'background.png');
        this.load.image('wheel', 'wheel.png');
        this.load.image('pin', 'pin.png');
        this.load.image('spinButton', 'spinButton.png');
        this.load.image('bgReward', 'backgroundReward.png');
        this.load.image('btnClaim', 'btnClaim.png');
    }

    create() {
        // Add the loading background image
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'loadingBackground')
            .setOrigin(0.5, 0.5)
            .setDisplaySize(this.cameras.main.width, this.cameras.main.height);

        // Delay the transition to the main scene by 1 second
        this.time.delayedCall(2000, () => {
            this.scene.start('MainScene');
        });
    }
}

class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainScene' });
    }

    preload() {
        // Preload anything else specific to this scene if needed
    }

    create() {
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
        
        // Add the wheel
        const wheel = this.add.sprite(this.cameras.main.width / 2, 250, 'wheel');
        wheel.setScale(0.35);
        wheel.setOrigin(0.5, 0.5);

        // Add the pin
        const pin = this.add.sprite(wheel.x, wheel.y, 'pin');
        pin.setDisplaySize(100, 100);

        // Add the button below the wheel
        const spinButton = this.add.sprite(this.cameras.main.width / 2, wheel.y + wheel.displayHeight / 2 + 50, 'spinButton');
        spinButton.setScale(0.35);
        spinButton.setOrigin(0.5, 0.5);
        spinButton.setInteractive();

        // Set button click to spin the wheel
        spinButton.on('pointerdown', () => {
            spinWheel.call(this, wheel, showToast);
        });
    }

    update() {
        // Update the scene if necessary
    }
}

const config = {
    type: Phaser.AUTO,
    width: Math.min(480, window.innerWidth), // Set max-width to 480
    height: window.innerHeight, // Set height to 100%
    parent: 'game-container',
    scene: [LoadingScene, MainScene] // Include both scenes in the game
};

const game = new Phaser.Game(config);

function spinWheel(wheel, showToast) {
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
        duration: 5250,
        onComplete: () => {
            const winningSegment = determineWinningSegment(wheel.angle % 360);

            let winIndex = rewardList.findIndex(item => item.val == winningSegment);
            console.log("Winning Segment: ", winIndex > -1 ? rewardList[winIndex].label : "Thanks");

            showToast(`${winIndex > -1 ? rewardList[winIndex].label : "Thanks"}`);
            showPopup.call(this, winIndex > -1 ? rewardList[winIndex].label : "Thanks haha");
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

    const style = { font: '32px Arial', fill: '#fff', align: 'center' };
    const text = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY - 50, `Congratulations!\nYou won ${reward}`, style);
    text.setOrigin(0.5, 0.5);

    const btnClaim = this.add.image(this.cameras.main.centerX, this.cameras.main.height - 50, 'btnClaim');
    btnClaim.setOrigin(0.5, 0.5);
    btnClaim.setInteractive();

    btnClaim.on('pointerdown', () => {
        popupBackground.destroy(); // Remove the popup
        text.destroy();
        btnClaim.destroy();
        // Add more logic here if needed, like moving to another scene
    });
}
