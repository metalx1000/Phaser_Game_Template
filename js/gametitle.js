var gameTitle = function(game){}

gameTitle.prototype = {
  	create: function(){
                this.game.physics.startSystem(Phaser.Physics.ARCADE);
		var gameTitle = this.game.add.sprite(this.game.world.width * 0.5,this.game.world.height * .1,"game_title");
		gameTitle.anchor.setTo(0.5,0.5);

                var play = this.create_button(this.game.world.width * 0.5,this.game.world.height * .4,"play_btn","TheGame");
                var info = this.create_button(this.game.world.width * 0.5,this.game.world.height * .5,"info","info");
                this.create_simon();
                //this.main_title();
                this.load_player("player", this.game.world.width * 0.2, -64, "right");

                mute = false;
                mute_btn = this.game.add.button(this.game.world.width * 0.9, 10, 'mute', this.mute, this);
                //go full screen on click
                this.game.input.onDown.add(this.fullscreen, this);
	},
        update: function(){
                this.game.physics.arcade.collide(player, simon);
            
                if(player.position.x > this.game.world.width){
                    this.load_player("player2", this.game.world.width * 0.8, -64, "left");
                }else if(player.position.x < 0){
                    this.load_player("player", this.game.world.width * 0.2, -64, "right");
                }
        },
        create_button: function(x,y,img,state){
            var btn = this.game.add.button(x,y,img,this.change_state,this);
            btn.state = state;
            btn.anchor.setTo(0.5,0.5);
            btn.events.onInputOver.add(function(_this){
                var tween = _this.game.add.tween(_this.scale)
                    .to({ x: 1.5, y: 1.5 }, 200)
                    .to({ x: 1, y: 1 }, 400)
                    .start();
            });
        },
        change_state: function(_this){
            click.play();
            this.game.state.start(_this.state);            
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
        mute: function(){
            if(mute == false){
                mute = true;
                music.stop();
                mute_btn.frame = 1;
            }else{
                mute = false;
                music.play();
                mute_btn.frame = 0;
            }
        }
}   
