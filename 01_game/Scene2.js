
class Scene2 extends Phaser.Scene{
    constructor(){
        super("playGame");
    }

    create(){
        // this.background = this.add.image(0,0,"background");
        //tilesprite is a sprite that has a repeating texture so instead of moving image it will move the texture of image
        this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
        //set the position of image at left side top 
        this.background.setOrigin(0,0);


        //Two animation for the power up
        this.anims.create({
            key: "red",
            frames: this.anims.generateFrameNumbers("power-up", {
              start: 0,
              end: 1
            }),
            frameRate: 20,
            repeat: -1
          });
          this.anims.create({
            key: "gray",
            frames: this.anims.generateFrameNumbers("power-up", {
              start: 2,
              end: 3
            }),
            frameRate: 20,
            repeat: -1
          });
      
          
          this.physics.world.setBoundsCollision();
      
          this.powerUps = this.physics.add.group();
      
          // 2.2 Add multiple objects
          var maxObjects = 4;
          for (var i = 0; i <= maxObjects; i++) {
            var powerUp = this.physics.add.sprite(16, 16, "power-up");
            this.powerUps.add(powerUp);
             powerUp.setRandomPosition(0, 0, game.config.width, game.config.height);
      
            // set random animation
            if (Math.random() > 0.5) {
              powerUp.play("red");
            } else {
              powerUp.play("gray");
            }
      
            // setVelocity
            powerUp.setVelocity(100, 100);
            
            powerUp.setCollideWorldBounds(true);
            
           powerUp.setBounce(1);
      
          }

    }

    update(){
            
    }
   
  
}



