var info = function(game){}

info.prototype = {
  	create: function(){
                this.game.physics.startSystem(Phaser.Physics.ARCADE);
		var gameTitle = this.game.add.sprite(this.game.world.width * 0.5,this.game.world.height * .1,"game_title");
		gameTitle.anchor.setTo(0.5,0.5);
		var exitButton = this.create_button(this.game.world.width * 0.5,this.game.world.height * .2,"exit","GameTitle");

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
            _this = this;
            $.getJSON( "data/info.json", function( data ) {
                var y = _this.game.world.height * 0.3;
                for(var i = 0;i<data.length;i++){
                    var text=data[i].text;  
                    var url=data[i].url; 

                    var style = { font: "32px Arial", fill: "#ff0044", align: "center" };
                    var t = _this.game.add.text(_this.game.world.centerX,64*i+y, text, style);
                    t.url = url;
                    t.inputEnabled = true; 
                    t.events.onInputDown.add(_this.goto_url,this);
                    t.anchor.setTo(0.5,0.5);
                    console.log(text +":"+ url);
                }
             
            });
        },
        goto_url: function(text){
            click.play();
            window.open(text.url, "_blank");
        },
        create_button: function(x,y,img,state){
            var btn = this.game.add.button(x,y,img,this.change_state,this);
            btn.state = state;
            btn.anchor.setTo(0.5,0.5);
            btn.events.onInputOver.add(function(_this){
                var tween = _this.game.add.tween(_this.scale)
                    .to({ x: 1.5, y: 1.5 }, 200)
                    .to({ x: 1, y: 1 }, 400)
                    .start();
            });
        },
        change_state: function(_this){
            click.play();
            this.game.state.start(_this.state);
        },


}   
