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

        
        this.cameras.main.fade(8000, 0,0,0);
        this.time.delayedCall(8000, () => this.scene.start('beginning'));
    }
}

class Beginning extends Phaser.Scene {
    constructor() {
        super('beginning');
    }

    create() {
        this.add.text(50,50, "This is the beginning scene").setFontSize(50);

        this.input.on('pointerdown', () => this.scene.start('outro'));
    }
}

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


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Start, Intro, Beginning, Outro],
    title: "Adventure Game",
});
