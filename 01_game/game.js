//create a new instance of Phaser Game
    var config = {
        width:256,
        height:272,
        backgroundColor:0*000000,
        scene:[Scene1,Scene2],
        pixelArt:true,
        //enable game to support physics
        physics:{
            default:"arcade",
            arcade:{
                debug:false
            }
        }

    }
    var game = new Phaser.Game(config);


