var theGame = function(game){
}

theGame.prototype = {
  	create: function(){
            var click_me = this.game.add.button(this.game.world.width * 0.5,320,"click_me",this.clickMe,this);
            click_me.anchor.setTo(0.5,0.5);
             
	},
        clickMe: function(){
            this.game.state.start("GameOver");
        }
}