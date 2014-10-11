var info = function(game){}

info.prototype = {
  	create: function(){
                this.game.physics.startSystem(Phaser.Physics.ARCADE);
		var gameTitle = this.game.add.sprite(this.game.world.width * 0.5,this.game.world.height * .1,"game_title");
		gameTitle.anchor.setTo(0.5,0.5);
		var exitButton = this.game.add.button(this.game.world.width * 0.5,this.game.world.height * .2,"exit",this.menu,this);
		exitButton.anchor.setTo(0.5,0.5);

                this.create_simon();
                this.get_info();

                //go full screen on click
                this.game.input.onDown.add(this.fullscreen, this);
	},
        update: function(){
        },
        simonWeb: function(){
            window.open("http://multi8it.blogspot.com", "_blank");
        },
	menu: function(){
                click.play();
		this.game.state.start("GameTitle");
	},
        fullscreen: function(){
            this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.startFullScreen();
        },

        create_simon: function(){
		simon = this.game.add.sprite(this.game.world.width * 0.5,this.game.world.height * .9,"simon");
                simon.inputEnabled = true;
                simon.events.onInputDown.add(this.simonWeb,this);
                simon.anchor.setTo(0.5,0.5);
                this.game.physics.arcade.enable(simon);
                simon.body.immovable = true;
        },
        get_info: function(){
            $.getJSON( "info.json", function( data ) {
                console.log("data");
                var items = [];
                for(var i = 0;i<data.length;i++){
                    var text=data[i].text;  
                    var url=data[i].url;  
                    console.log(text +":"+ url);
                }
             
            });
        }
}   
