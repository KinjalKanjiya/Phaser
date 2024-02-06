class Scene1 extends Phaser.Scene {
    constructor() {
      super("bootGame");
    }
  
    preload(){
      this.load.image("background", "assets/Images/background.png");
      // this.load.image("ship", "assets/Images/ship.png");
      // this.load.image("ship2", "assets/Images/ship2.png");
      // this.load.image("ship3", "assets/Images/ship3.png");
      this.load.spritesheet("ship","assets/spritesheets/ship.png",{
        frameWidth:16,
        frameHeight:16
      });
      this.load.spritesheet("ship2","assets/spritesheets/ship2.png",{
        frameWidth:32,
        frameHeight:16
      });
      this.load.spritesheet("ship3","assets/spritesheets/ship3.png",{
        frameWidth:32,
        frameHeight:32
      });
      this.load.spritesheet("explosion","assets/spritesheets/explosion.png",{
        frameWidth:16,
        frameHeight:16
      });
      this.load.spritesheet("power-up","assets/spritesheets/power-up.png",{
        frameWidth:16,
        frameHeight:16
      })

    }
  
    create() {
      this.add.text(20, 20, "Loading game...");
      this.scene.start("playGame");
    }
  }