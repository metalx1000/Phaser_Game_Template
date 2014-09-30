var gameTitle = function(game){}

gameTitle.prototype = {
  	create: function(){
                this.game.physics.startSystem(Phaser.Physics.ARCADE);
		var gameTitle = this.game.add.sprite(this.game.world.width * 0.5,this.game.world.height * .1,"game_title");
		gameTitle.anchor.setTo(0.5,0.5);
		var playButton = this.game.add.button(this.game.world.width * 0.5,this.game.world.height * .2,"play_btn",this.playTheGame,this);
		playButton.anchor.setTo(0.5,0.5);

		simon = this.game.add.sprite(this.game.world.width * 0.5,this.game.world.height * .9,"simon");
                simon.anchor.setTo(0.5,0.5);
                this.game.physics.arcade.enable(simon);
                simon.body.immovable = true;

                this.load_player();
                //go full screen on click
                this.game.input.onDown.add(this.fullscreen, this);
	},
        update: function(){
            this.game.physics.arcade.collide(player, simon);
        },
	playTheGame: function(){
                click.play();
		this.game.state.start("TheGame");
	},
        fullscreen: function(){
            this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.startFullScreen();
        },

        load_player: function(){
            //animations
            player = this.game.add.sprite(0,0, 'player');
            player.animations.add('left', [0, 1, 2, 3, 4, 5, 6], 10, true);
            player.animations.add('right', [7, 8, 9, 10, 11, 12], 10, true);
            this.game.physics.arcade.enable(player);
            player.body.velocity.x = 150;
            player.body.gravity.y = 500;
            player.body.bounce.y = 0.2;
            //player.body.collideWorldBounds = true;

            player.animations.play('right');

        }
}
