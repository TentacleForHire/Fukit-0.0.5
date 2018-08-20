// Code for Fukit (Video Game) written by Benjamin Aarli. 
// written wednesday, 25th of july.

//  This just hides loaded elements behind it  //
// --- --- --- --- --- --- --- --- --- --- --- //

var player_fog;
var fog_wall = [];

function ctp(width, height, color, x, y){
	this.width = width; 
	this.height = height;
	this.color = color;
	this.x = x; 
	this.y = y; 
	
	this.update = function(){
		ctx = gameScreen.context;
		ctx.fillStyle = color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

