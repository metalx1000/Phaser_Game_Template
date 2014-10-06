var boot = function(game){
	console.log("Game Loading");
};
  
boot.prototype = {
	preload: function(){
            this.game.load.spritesheet('load_ani', 'res/load_ani.png', 128, 128);
            //this.input.maxPointers = 1;
            //this.stage.disableVisibilityChange = true;
         

	},
  	create: function(){

	    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	    this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;
	    this.game.scale.pageVertically = true;
            this.game.scale.setScreenSize(true);
            this.game.scale.setShowAll();
            this.game.scale.refresh();

            this.game.state.start("Preload");
	}
}
