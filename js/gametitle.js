var gameTitle = function(game){}

gameTitle.prototype = {
  	create: function(){
		var gameTitle = this.game.add.sprite(this.game.world.width * 0.5,160,"game_title");
		gameTitle.anchor.setTo(0.5,0.5);
		var playButton = this.game.add.button(this.game.world.width * 0.5,320,"play_btn",this.playTheGame,this);
		playButton.anchor.setTo(0.5,0.5);

		var simon = this.game.add.sprite(this.game.world.width * 0.5,this.game.world.height * .75,"simon");
                simon.anchor.setTo(0.5,0.5);
                //go full screen on click
                this.game.input.onDown.add(this.fullscreen, this);
	},
	playTheGame: function(){
                click.play();
		this.game.state.start("TheGame");
	},
        fullscreen: function(){
            this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.startFullScreen();
        }
}
