var boot = function(game){
	console.log("Game Loading");
};
  
boot.prototype = {
	preload: function(){
            this.game.load.spritesheet('load_ani', 'res/load_ani.png', 128, 128);
            //this.input.maxPointers = 1;
            //this.stage.disableVisibilityChange = true;

            if (this.game.device.desktop)
            {
                this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                this.scale.setMinMax(360, 240, 1280, 720);
                this.scale.pageAlignHorizontally = true;
                this.scale.pageAlignVertically = true;
                this.scale.setScreenSize(true);
                this.scale.refresh();
            }
            else
            {
                this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                this.scale.setMinMax(480, 260, 1024, 768);
                this.scale.pageAlignHorizontally = true;
                this.scale.pageAlignVertically = true;
                this.scale.forceOrientation(true, false);
                this.scale.setResizeCallback(this.gameResized, this);
                this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
                this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
                this.scale.setScreenSize(true);
                this.scale.refresh();
            }          

	},
  	create: function(){
/*
	    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	    this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;
	    this.game.scale.pageVertically = true;
            this.game.scale.setScreenSize(true);
            this.game.scale.setShowAll();
            this.game.scale.refresh();
*/
            this.game.state.start("Preload");
	}
}
