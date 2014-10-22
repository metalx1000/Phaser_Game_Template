var preload = function(game){}

preload.prototype = {
	preload: function(){ 
            load_text = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 256, 'Loading', { fill: '#ffffff' });
            load_text.anchor.setTo(.5,.5);

            this.game.load.onLoadStart.add(this.loadStart, this);
            this.game.load.onFileComplete.add(this.fileComplete, this);
            this.game.load.onLoadComplete.add(this.loadComplete, this);
            
            var load_icon = this.game.add.sprite(this.game.world.width * 0.5, this.game.world.height * 0.5, 'load_ani');
            load_icon.scale.setTo(2,2);
            load_icon.anchor.setTo(.5,.5);
            load_icon.animations.add('load');
            load_icon.animations.play('load', 10, true);
            this.load.setPreloadSprite(load_icon);
            
            //load other preload stuff here
            //sounds
            var sounds = ["click"];
            for(var i = 0; i < sounds.length;i++){
                this.game.load.audio(sounds[i], ['res/sounds/' + sounds[i] + '.mp3','res/sounds/' + sounds[i] + '.ogg']);
            }

            for(var i = 1;i <= 3 ;i++){
                this.game.load.audio('touch' + i, ['res/sounds/touch'+i+'.mp3','res/sounds/touch'+i+'.ogg']);
            }

            this.load_images();

            //music: https://www.youtube.com/watch?v=qFQP_A4Vacc
            this.game.load.audio('music', ['res/music/music.mp3','res/music/music.ogg']);

            //load sprites that are 64x64
            var sprites64 = ["player","player2","mute"];
            for(var i = 0; i < sprites64.length;i++){
                this.game.load.spritesheet(sprites64[i],"res/sprites/"+sprites64[i]+".png",64,64);
            }

	    this.game.load.spritesheet("playerf","res/sprites/playerf.png",128,96);
	    this.game.load.spritesheet("playerf2","res/sprites/playerf2.png",128,96);

	},
  	create: function(){
                click = this.game.add.audio("click");
                touch=[];
                for(var i = 1;i <= 3 ;i++){
                    touch.push(this.game.add.audio("touch"+i));
                }
                music = this.game.add.audio("music");
                music.play('',0,0.3,true);
	},

        loadComplete: function(){
		this.game.state.start("GameTitle");
        },

        loadStart: function(){
            //console.log("Loading...");
            load_text.setText("Loading ...");

        },

        //  This callback is sent the following parameters:
        fileComplete: function(progress, cacheKey, success, totalLoaded, totalFiles) {
            //console.log("File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles);
            load_text.setText("File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles);
        },

        load_images: function(){
            _this = this;
            $.getJSON( "data/images.js", function( data ) {
                for(var i = 0;i<data.length;i++){
                    var image=data[i];
                    _this.game.load.image(image,"res/" + image + ".png");
                }

            });

        }

}
