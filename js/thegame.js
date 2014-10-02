var theGame = function(game){
}

theGame.prototype = {
  	create: function(){
            var click_me = this.game.add.button(this.game.world.width * 0.5,this.game.world.height * 0.2,"click_me",this.level1,this);
	    click_me.anchor.setTo(0.5,0.5);
	    this.create_player("playerf");
	},
        clickMe: function(player){
            click.play();
            tween = this.game.add.tween(player).to({ x: this.game.world.width + 500 }, 1000);
            tween.start();           
            //console.log(player); 
            if(player.key == "playerf"){
                this.create_player("playerf2");
            }else{
                this.create_player("playerf");
            }
        },
        level1: function(){
            click.play();
            this.game.state.start("Level1");
        },
	create_player: function(pl){
            //player animation
            //player = this.game.add.sprite(this.game.world.width * 0.5,this.game.world.height * 0.5, "playerf");
            player = this.game.add.sprite(-256,this.game.world.height * 0.5, pl);
            player.anchor.setTo(.5,.5);
            player.scale.setTo(3,3);
            player.animations.add('walk');
	    player.animations.play('walk', 10, true);
            player.inputEnabled = true;
	    player.events.onInputDown.add(this.clickMe,this);
            tween = this.game.add.tween(player).to({ x: this.game.world.width * 0.5 }, 1000);
            tween.start();

	}
}
