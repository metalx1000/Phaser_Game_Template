var preload = function(game){}

preload.prototype = {
	preload: function(){ 
            var load_icon = this.game.add.sprite(this.game.world.width * 0.5, this.game.world.height * 0.5, 'load_ani');
            load_icon.scale.setTo(2,2);
            load_icon.anchor.setTo(.5,.5);
            load_icon.animations.add('load');
            load_icon.animations.play('load', 10, true);
            this.load.setPreloadSprite(load_icon);
            
            //load other preload stuff here
	    //this.game.load.spritesheet("sprite","res/sprite.png",64,64);
	    this.game.load.image("play_btn","res/play_btn2.png");
	    this.game.load.image("game_title","res/game_title.png");
	    this.game.load.image("click_me","res/click_me.png");
	    this.game.load.image("game_over","res/game_over.png");
	    this.game.load.image("start_over","res/start_over.png");
	    this.game.load.image("simon","res/simon.png");

            //sounds
            this.game.load.audio('click', ['res/sounds/click.mp3','res/sounds/click.ogg']);
            //music: https://www.youtube.com/watch?v=qFQP_A4Vacc
            this.game.load.audio('music', ['res/music/music.mp3','res/music/music.ogg']);
	},
  	create: function(){
                click = this.game.add.audio("click");
                music = this.game.add.audio("music");
                music.play('',0,1,true);
		this.game.state.start("GameTitle");
	}
}
