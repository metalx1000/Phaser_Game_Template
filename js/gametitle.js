var gameTitle = function(game){}

gameTitle.prototype = {
  	create: function(){
                this.game.physics.startSystem(Phaser.Physics.ARCADE);
		var gameTitle = this.game.add.sprite(this.game.world.width * 0.5,this.game.world.height * .1,"game_title");
		gameTitle.anchor.setTo(0.5,0.5);
		var playButton = this.game.add.button(this.game.world.width * 0.5,this.game.world.height * .2,"play_btn",this.playTheGame,this);
		playButton.anchor.setTo(0.5,0.5);

                this.create_simon();
                this.main_title();
                this.load_player("player", 0, 0, "right");

                //go full screen on click
                this.game.input.onDown.add(this.fullscreen, this);
	},
        update: function(){
                this.game.physics.arcade.collide(player, simon);
            
                if(player.position.x > this.game.world.width){
                    this.load_player("player2", this.game.world.width, 0, "left");
                }else if(player.position.x < 0){
                    this.load_player("player", 0, 0, "right");
                }
        },
        simonWeb: function(){
            window.open("http://multi8it.blogspot.com", "_blank");
        },
	playTheGame: function(){
                click.play();
		this.game.state.start("TheGame");
	},
        fullscreen: function(){
            this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.startFullScreen();
        },

        load_player: function(pl, posx, posy, direction){
            //animations
            player = this.game.add.sprite(posx,posy, pl);
            player.animations.add('left', [0, 1, 2, 3, 4, 5], 10, true);
            player.animations.add('right', [6, 7, 8, 9, 10, 11], 10, true);
            this.game.physics.arcade.enable(player);
            player.body.gravity.y = 500;
            player.body.bounce.y = 0.2;
            //player.body.collideWorldBounds = true;
            if(direction == "right"){
                player.body.velocity.x = 150;
                player.animations.play('right');
            }else{
                player.animations.play('left');
                player.body.velocity.x = -150;
            }

        },
        create_simon: function(){
		simon = this.game.add.sprite(this.game.world.width * 0.5,this.game.world.height * .9,"simon");
                simon.inputEnabled = true;
                simon.events.onInputDown.add(this.simonWeb,this);
                simon.anchor.setTo(0.5,0.5);
                this.game.physics.arcade.enable(simon);
                simon.body.immovable = true;
        },
        main_title: function(){
                title = this.game.add.sprite(this.game.world.width * 0.5,this.game.world.height * .5,"main_title");
                title.inputEnabled = true;
                title.events.onInputDown.add(this.krisWeb,this);
                title.anchor.setTo(0.5,0.5);
        },
        krisWeb: function(){
            window.open("http://filmsbykris.com", "_blank");
        },


}   
