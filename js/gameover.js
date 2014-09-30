var gameOver = function(game){}

gameOver.prototype = {
  	create: function(){
		var game_over = this.game.add.button(this.game.world.width * 0.5,320,"game_over",this.gameOver,this);
		game_over.anchor.setTo(0.5,0.5);
		var start_over = this.game.add.button(this.game.world.width * 0.5,620,"start_over",this.gameOver,this);
		start_over.anchor.setTo(0.5,0.5);
	},
        gameOver: function(){
            this.game.state.start("GameTitle");
        }
}
