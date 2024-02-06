class Scene1 extends Phaser.Scene {
    constructor() {
      super("bootGame");
    }
  
    preload(){
      // this.load.image("background", "assets/Images/background.png");
     
      this.load.spritesheet("power-up", "assets/spritesheets/power-up.png",{
        frameWidth: 16,
        frameHeight: 16
      });
    }
  
    create() {
      this.add.text(20, 20, "Loading game...");
      this.scene.start("playGame");
      }

    }