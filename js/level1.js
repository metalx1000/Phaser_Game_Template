var level1 = function(game){}

level1.prototype = {
  	create: function(){
                delay = 0;
                this.game.physics.startSystem(Phaser.Physics.ARCADE);
		var gameTitle = this.game.add.sprite(this.game.world.width * 0.5,this.game.world.height * .1,"game_title");
		gameTitle.anchor.setTo(0.5,0.5);
		var exit_btn = this.game.add.button(this.game.world.width * 0.5,this.game.world.height * .2,"exit",this.exit,this);
		exit_btn.anchor.setTo(0.5,0.5);

                bricks = this.game.add.group();
                bricks.enableBody = true;
                players = this.game.add.group();
                players.enableBody = true;

                this.load_ground();
                this.load_player("player", 0, 0, "right");

                //go full screen on click
                this.game.input.onDown.add(this.fullscreen, this);
	},
        update: function(){
                this.game.physics.arcade.collide(players, bricks);
                delay-=1;
                for(var i = 0;i < players.children.length;i++){ 
                    var player = players.children[i];
                    var v = Math.floor(Math.random() * 150) + 50
                    if(player.position.x > this.game.world.width){
                        this.load_player("player2", this.game.world.width, 0, "left");
                        player.body.velocity.x = -v;
                        player.animations.play('left');                    
                    }else if(player.position.x < 0){
                        this.load_player("player", 0, 0, "right");
                        player.animations.play('right');
                        player.body.velocity.x = v;
                    }
                }
        },
	exit: function(){
                click.play();
		this.game.state.start("GameOver");
	},
        fullscreen: function(){
            this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.startFullScreen();
        },

        load_player: function(pl, posx, posy, direction){
            if(delay<1){
                delay = 200;
                //animations
                var player = players.create(posx, posy, pl);
                player.animations.add('left', [0, 1, 2, 3, 4, 5], 10, true);
                player.animations.add('right', [11,10,9,8,7,6], 10, true);
                player.body.gravity.y = 500;
                player.body.bounce.y = 0.2;
                player.inputEnabled = true;
                player.events.onInputOver.add(this.player_jump,this);

                if(direction == "right"){
                    player.body.velocity.x = 150;
                    player.animations.play('right');
                }else{
                    player.animations.play('left');
                    player.body.velocity.x = -150;
                }
            }
        },

        player_jump: function(player){
            var x = Math.floor(Math.random() * touch.length);
            touch[x].play();
            player.body.velocity.y = -500;
        },
        load_ground: function(){
            for(var x=1;x<3;x++){
                for(var i=0;i< this.game.world.width;i+=64){
                    var brick = bricks.create(i, this.game.world.height - 64 * x, 'brick');
                    brick.body.immovable = true;                
                }
            }
        }

}   
