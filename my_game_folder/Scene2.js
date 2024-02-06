
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

        // this.ship1 = this.add.image(config.width/2-50,config.height/2,"ship");
        // this.ship2 = this.add.image(config.width/2,config.height/2,"ship2");
        // this.ship3 = this.add.image(config.width/2-50,config.height/2,"ship3");

        this.ship1 = this.add.sprite(config.width/2-50,config.height/2,"ship");
        this.ship2 = this.add.sprite(config.width/2,config.height/2,"ship2");
        this.ship3 = this.add.sprite(config.width/2-50,config.height/2,"ship3");

        //For Animation
        this.anims.create({
            key:"ship1_anim",
            frames:this.anims.generateFrameNumbers("ship"),
            frameRate:20,
            repeat:-1   //for infinite loop use -1
        });
        this.anims.create({
            key:"ship2_anim",
            frames:this.anims.generateFrameNumbers("ship2"),
            frameRate:20,
            repeat:-1   //for infinite loop use -1
        });
        this.anims.create({
            key:"ship3_anim",
            frames:this.anims.generateFrameNumbers("ship3"),
            frameRate:20,
            repeat:-1   //for infinite loop use -1
        });
        this.anims.create({
            key:"explode",
            frames:this.anims.generateFrameNumbers("explosion"),
            frameRate:20,
            repeat:0,  
            hideOnComplete:true
        });
        this.ship1.play("ship1_anim");
        this.ship2.play("ship2_anim");
        this.ship3.play("ship3_anim")
        // this.add.text(20,20,"Playing game",{font:"25px Arial",fill:"yellow"});


        //Enable recieve Input 
        this.ship1.setInteractive();
        this.ship2.setInteractive();
        this.ship3.setInteractive();


        //Event that listens whenever an interactive object is clicked
        this.input.on('gameobjectdown',this.destroyShip,this);
    }
    update(){
            
        this.moveShip(this.ship1,1);
        this.moveShip(this.ship2,2);
        this.moveShip(this.ship3,3);
        this.background.tilePositionY -= 0.5;
    }
    //It accept 2 parameter , one for ship object to move and another for its Y velocity 
    moveShip(ship,speed){
        ship.y +=speed;
        if(ship.y > config.height){
            this.resetShipPos(ship);
        }
    }

    resetShipPos(ship){
        ship.y = 0;
        //This will create a random value between zero and the width of your game and assign it to the ship x value position
        var randomX = Phaser.Math.Between(0,config.width);
        ship.x = randomX;
    }

    destroyShip(pointer,gameObject){
        gameObject.setTexture("explosion");
        gameObject.play("explode");  //we play the explode animation
    }

  
}



