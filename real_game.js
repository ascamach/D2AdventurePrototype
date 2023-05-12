// ---------------------------------------------------------
// Start screen for the player

class Start extends Phaser.Scene {
    constructor() {
        super('start');
    }
    create() {
        this.add.text(50,50, "Adventure awaits!").setFontSize(50);
        this.add.text(50,100, "Click anywhere to begin.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('intro'));
        });
    }
}

// ---------------------------------------------------------
// Display the somewhat fancy logo

class Intro extends Phaser.Scene {
    constructor() {
        super('intro');
    }

    preload() {
        this.load.path = "./assets/";
        this.load.image("logo", "logo.png");
    }

    create() {
        this.add.text(50, 50, "testing").setFontSize(50);

        let logo = this.add.image(game.canvas.width / 2, -600, "logo");

        this.tweens.add({
            targets: logo,
            y: game.canvas.width / 2 - 450,
            alpha: 1,
            delay: 1000,
            duration: 2000,
            ease: "SineIn",
            repeat: 0
        });

        // 8000
        this.cameras.main.fade(1000, 0,0,0);
        this.time.delayedCall(1000, () => this.scene.start('beginning'));
    }
}


// ---------------------------------------------------------
// Beginning scene, explains the setting for the game

class Beginning extends Phaser.Scene {
    constructor() {
        super('beginning');
    }

    create() {
        this.add.text(50,50, "This is the beginning scene").setFontSize(50);

        this.input.on('pointerdown', () => this.scene.start('crewmate'));
    }
}


// ---------------------------------------------------------
// Outro scene

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        this.add.text(50, 50, "That's all!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('start'));
    }
} 

// --------------------------------------------------------
// Crewmate Quarters

class Crewmate extends AdventureScene {
    constructor() {
        super("crewmate", "Crewmate's Quarters");
    }

    onEnter() {
        let test = this.add.text(this.w * 0.5, this.h * 0.5, "test message")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("This is a test message."))
            .on('pointerdown', () => this.gotoScene("main"));
                /*
                this.showMessage("You have clicked this message.");
                this.tweens.add({
                    targets: test,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
                */
                // this.cameras.main.fade(1000, 0,0,0);
    }
}

// ---------------------------------------------------------
// Main Room

class Main extends AdventureScene {
    constructor() {
        super("main", "Main Room");
    }

    onEnter() {
        this.add.text(this.w * 0.3, this.w * 0.3, "This is the main room")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerdown', () => {
                this.gotoScene("outro");
            });
        
        this.add.text(this.w * 0.175, this.h * 0.175, "Navigation Room")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("The navigation room");
            })
            .on('pointerdown', () => {
                this.gotoScene("navigation");
            });

        this.add.text(this.w * 0.5, this.h * 0.175, "Bridge")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Go to the bridge");
            })
            .on('pointerdown', () => {
                this.gotoScene("bridge");
            });

        this.add.text(this.w * 0.125, this.h * 0.75, "Engine")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Go to the engine room");
            })
            .on('pointerdown', () => {
                this.gotoScene("engine");
            });

        this.add.text(this.w * 0.5, this.h * 0.75, "Captain's Room")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Go to the captain's room");
            })
            .on('pointerdown', () => {
                this.gotoScene("captain");
            });
    }
}

// ---------------------------------------------------------
// Navigation Room

class Navigation extends AdventureScene {
    constructor() {
        super("navigation", "Navigation Room");
    }

    onEnter() {
        this.add.text(this.w * 0.2, this.h * 0.3, "This is the navigation room");

        this.add.text(this.w * 0.5, this.h * 0.5, "Back to the main room")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Back to main room");
            })
            .on('pointerdown', () => {
                this.gotoScene("main");
            });
    }
}

// ---------------------------------------------------------
// The bridge

class Bridge extends AdventureScene {
    constructor () {
        super("bridge", "The Bridge");
    }

    onEnter() {
        this.add.text(this.w * 0.2, this.h * 0.3, "This is the bridge");

        this.add.text(this.w * 0.5, this.h * 0.5, "Back to the main room")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Back to main room");
            })
            .on('pointerdown', () => {
                this.gotoScene("main");
            });
    }
}

// ---------------------------------------------------------
// Engine Room

class Engine extends AdventureScene {
    constructor () {
        super("engine", "The Engine Room");
    }

    onEnter() {
        this.add.text(this.w * 0.2, this.h * 0.3, "This is the engine room");

        this.add.text(this.w * 0.5, this.h * 0.5, "Back to the main room")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Back to main room");
            })
            .on('pointerdown', () => {
                this.gotoScene("main");
            });
    }
}

// ---------------------------------------------------------
// Captain's Room

class Captain extends AdventureScene {
    constructor () {
        super("captain", "The Captain's Room");
    }

    onEnter() {
        this.add.text(this.w * 0.2, this.h * 0.3, "This is the captain's room");

        this.add.text(this.w * 0.5, this.h * 0.5, "Back to the main room")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Back to main room");
            })
            .on('pointerdown', () => {
                this.gotoScene("main");
            });
    }
}

// ---------------------------------------------------------
// Game constructor

const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Start, Intro, Beginning, Crewmate, Main, Navigation, Bridge, Captain, Engine, Outro],
    title: "Adventure Game",
});
