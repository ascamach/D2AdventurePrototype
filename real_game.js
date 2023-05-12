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

    preload() {
        this.load.path = "./assets/";
        this.load.image("hatch", "hatch.png");
        this.load.image("crewmate_bg", "crewmate.png");
        this.load.image("spacesuit", "spacesuit.png");
    }

    onEnter() {
        this.background = this.add.image(0,0,"crewmate_bg")
            .setOrigin(0,0);
        // this.backgroundScale = 0.75;
        this.background.displayWidth = this.w * 0.75;
        this.background.displayHeight = this.h;

        let spacesuit = this.add.image(this.w * 0.375, this.h * 0.8, "spacesuit")
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("A spacesuit. Will come in handy.");
            })
            .on('pointerdown', () => {
                this.showMessage("You equipped the spacesuit.");
                this.gainItem("spacesuit");
                this.tweens.add({
                    targets: spacesuit,
                    y: `-=${2 * this.s}`,
                    alpha: {from: 1, to: 0},
                    duration: 500,
                    onComplete: () => spacesuit.destroy()
                });
            })

        let hatch = this.add.image(this.w * 0.6, this.h * 0.5, "hatch")
            .setInteractive()
            .on('pointerover', () => this.showMessage("Go to main area"))
            .on('pointerdown', () => {
                this.gotoScene("main");
            });
        
        this.item_shine(hatch);
        this.item_shine(spacesuit);
        /*
        let fx = hatch.postFX.addShine(1, .2, 5);

        this.tweens.add({
            targets: hatch,
            duration: 4000,
            repeatDelay: 800,
            repeat: -1
        });
        */
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

    prelaod() {
        this.load.path = "./assets/";
        this.load.image("hatch", "hatch.png");
    }

    onEnter() {
        this.add.text(this.w * 0.3, this.w * 0.3, "Main room")
            .setFontSize(50)
            .setInteractive()
            .on('pointerdown', () => {
                this.gotoScene("outro");
            });
        
        let crew_hatch = this.add.image(this.w * 0.35, this.h * 0.75, "hatch")
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Go to crewmate room");
            })
            .on('pointerdown', () => {
                this.showMessage("It locked itself on me...");
                this.shake(crew_hatch);
            })
        
        let supplies_hatch = this.add.image(this.w * 0.175, this.h * 0.175, "hatch")
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Go to supplies room");
            })
            .on('pointerdown', () => {
                this.gotoScene("supplies");
            });

        let bridge_hatch = this.add.image(this.w * 0.6, this.h * 0.175, "hatch")
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Go to the bridge");
            })
            .on('pointerdown', () => {
                this.gotoScene("bridge");
            });

        let engine_hatch = this.add.image(this.w * 0.125, this.h * 0.75, "hatch")
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Go to the engine room");
            })
            .on('pointerdown', () => {
                this.gotoScene("engine");
            });

        let captain_hatch = this.add.image(this.w * 0.6, this.h * 0.75, "hatch")
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Go to the captain's room");
            })
            .on('pointerdown', () => {
                this.gotoScene("captain");
            });

        this.item_shine(supplies_hatch);
        this.item_shine(bridge_hatch);
        this.item_shine(engine_hatch);
        this.item_shine(captain_hatch);
    }
}

// ---------------------------------------------------------
// Supplies Room

class Supplies extends AdventureScene {
    constructor() {
        super("supplies", "Supplies Room");
    }

    preload() {
        this.load.path = "./assets/";
        this.load.image("supplies_bg", "supplies_bg.png");
        this.load.image("wire", "wire.png");
    }

    onEnter() {
        this.background = this.add.image(0,0,"supplies_bg")
            .setOrigin(0,0);
        // this.backgroundScale = 0.75;
        this.background.displayWidth = this.w * 0.75;
        this.background.displayHeight = this.h;

        this.add.text(this.w * 0.2, this.h * 0.3, "This is the supplies room");

        let main_hatch = this.add.image(this.w * 0.6, this.h * 0.5, "hatch")
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Back to main room");
            })
            .on('pointerdown', () => {
                this.gotoScene("main");
            });

        let num1 = this.add.text(this.w * 0.05, this.h * 0.8, "0")
            .setFontSize(50)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Seems like I can change the value of this number.");
            })
            .on('pointerdown', () => {
                if(num1.text == 9) {
                    num1.text = 0;
                } else {
                    num1.text = (parseInt(num1.text) + 1);
                }
            });

        let num2 = this.add.text(this.w * 0.1, this.h * 0.8, "0").setFontSize(50)
            .setFontSize(50)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Seems like I can change the value of this number.");
            })
            .on('pointerdown', () => {
                if(num2.text == 9) {
                    num2.text = 0;
                } else {
                    num2.text = (parseInt(num2.text) + 1);
                }
            });

        let num3 = this.add.text(this.w * 0.15, this.h * 0.8, "0").setFontSize(50)
            .setFontSize(50)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Seems like I can change the value of this number.");
            })
            .on('pointerdown', () => {
                if(num3.text == 9) {
                    num3.text = 0;
                } else {
                    num3.text = (parseInt(num3.text) + 1);
                }
            });

        let wire = this.add.image(this.w * 0.375, this.h * 0.5, "wire")
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Looks like the wire I need");
            })
            .on('pointerdown', () => {
                this.gainItem("wire");
                this.tweens.add({
                    targets: wire,
                        y: `-=${2 * this.s}`,
                        alpha: { from: 1, to: 0 },
                        duration: 500,
                        onComplete: () => wire.destroy()
                });
            });
        
        let supplies_hatch = this.add.image(this.w * 0.1, this.h * 0.5, "hatch")
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("This leads to the supplies room.");
            })
            .on('pointerdown', () => {
                if (num1.text == 2 && num2.text == 4 && num3.text == 7) {
                    this.gotoScene("navigation");
                } else {
                    this.showMessage("It seems to be locked.");
                    this.shake(supplies_hatch);
                }
            });

        this.item_shine(main_hatch);
        this.item_shine(supplies_hatch);
    }
}

// ---------------------------------------------------------
// Navigation Room

class Navigation extends AdventureScene {
    constructor() {
        super("navigation", "Navigation Room");
    }

    preload() {
        this.load.path = "./assets/";
        this.load.image("navigation_monitor", "navigation_monitor.png");
    }

    onEnter() {
        this.add.text(this.w * 0.2, this.h * 0.3, "This is the navigation room");

        let supplies_hatch = this.add.image(this.w * 0.6, this.h * 0.5, "hatch")
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Back to supplies room");
            })
            .on('pointerdown', () => {
                this.gotoScene("supplies");
            });
        
        let nav_monitor = this.add.image(this.w * 0.15, this.h * 0.5, "navigation_monitor")
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("A directional map. This is extremely useful.");
            })
            .on('pointerdown', () => {
                if(this.hasItem("directions")) {
                    this.showMessage("Already have directions, we should be good to go.");
                } else {
                    this.showMessage("This'll be useful for the way back home.");
                    this.gainItem('directions');
                }
            });

        this.item_shine(supplies_hatch);
        this.item_shine(nav_monitor);
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
    scene: [Start, Intro, Beginning, Crewmate, Main, Navigation, Bridge, Captain, Engine, Supplies, Outro],
    title: "Adventure Game",
});
