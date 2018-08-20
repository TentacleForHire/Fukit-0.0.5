// Code for Fukit (Video Game) written by Benjamin Aarli. 
// written Sunday, 5th of August.

//  This just hides loaded elements behind it  //
// --- --- --- --- --- --- --- --- --- --- --- //

var wind 			= 0;
var fall_speed 		= 30;  // Fall speed of rains. 
var floor 			= 160; // rains won't fall beyond floor value. 
var rainAmountMax 	= 10; // Maximum rains on screen. std 500
var rainWH_Max 		= 2;  // rain width and height maximum value.
var rain 			= []; // All rain elements are contained within this array.

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max) + 1);
}

function drop(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
	
	this.i 				= 0; // current image of spritesheet.
	this.p 				= 1; // number to pluss this.i with? I don't know why it's important but I trust my past self enough to leave it be. 
	
	var every 			= 160; // every is amount of milliseconds between frames updates. 
	this.per 			= every;
	
	this.fall = function(){
		this.y += fall_speed; 
	},
	
	this.update = function(){
       	ctx = gameScreen.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);	
	},
	
	this.splash = function(){
		ctx.drawImage(rain_splash, this.i * 64, 0, 64, 64, this.x - 32, this.y - 64, 64, 64);
		
		// Animation process //
		this.iMax = 4; 
		this.per = this.per - 64; 
			
		if (this.per <= 0) { 			// if this.per is more then 0
			if (this.i <= this.iMax) { 	// if this.i is more or equal to this.iMax. 
				this.i = this.p + this.i;
			}
			this.per = every; 			// This per is equal every. 
		}
	}
}

function makeRain(w) {
	if (rain.length != rainAmountMax) {
		rain.push(new drop(0.5, 3, 'white', getRandomInt(w * gameScreen.canvas.width) - getRandomInt(w * gameScreen.canvas.width), getRandomInt(-gameScreen.canvas.height)));	
	} 
	if (rain.length > 0) { // If rain exists. 
		for (i = 0; i != rain.length; i++) { // loop all the rain for when they hit the floor. 
			if (rain[i].y >= floor) { // if the rain has hit the floor and finished its splash animation. 
				
				rain[i].splash();	
				
				if (rain[i].i == rain[i].iMax){
					rain.splice(i, 1); 
					i--;
				}
			} else {
				rain[i].fall();
				rain[i].update();
			}
		}
	}
}
