var boot = function(game){
	console.log("Game Loading");
};
  
boot.prototype = {
	preload: function(){
            this.game.load.spritesheet('load_ani', 'res/load_ani.png', 64, 64);
	},
  	create: function(){
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.scale.setScreenSize();
		this.game.state.start("Preload");
	}
}
