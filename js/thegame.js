var theGame = function(game){
}

theGame.prototype = {
  	create: function(){
            var click_me = this.game.add.button(this.game.world.width * 0.5,this.game.world.height * 0.2,"click_me",this.clickMe,this);
            click_me.anchor.setTo(0.5,0.5);

            //player animation
            player = this.game.add.sprite(this.game.world.width * 0.5,this.game.world.height * 0.5, "playerf");
            player.anchor.setTo(.5,.5);
            player.scale.setTo(3,3);
            player.animations.add('walk');
            player.animations.play('walk', 10, true);
            player.inputEnabled = true;
            player.events.onInputDown.add(this.clickMe,this);
             
	},
        clickMe: function(){
            click.play();
            this.game.state.start("GameOver");
        }
}
