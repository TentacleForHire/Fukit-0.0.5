// Code for Fukit (Video Game) written by Benjamin Aarli. 
// written wednesday, 25th of july.

var pixel_w = 240; 
var pixel_h = 160;

var gameScreen = {
	canvas : document.createElement("canvas"), 
	start : function() {
		
		this.canvas.width  = pixel_w;
		this.canvas.height = pixel_h;
		
		this.canvas.style.position 			= "absolute";
		this.canvas.style.width    			= this.canvas.width  * 4 + "px";
		this.canvas.style.height   			= this.canvas.height * 4 + "px";
		this.canvas.style.zIndex  			= 0; 
		this.canvas.style.backgroundColor 	= 'black';
		this.canvas.style.left 				= (parseInt(window.innerWidth)  - parseInt(this.canvas.style.width))  / 2 + "px"; 
		this.canvas.style.top  				= (parseInt(window.innerHeight) - parseInt(this.canvas.style.height)) / 2 + "px"; 
		
		document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		this.interval = setInterval(gameLoop, gameSpeed);
		
	}, 
	clear : function(){
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.canvas.style.left 				= (parseInt(window.innerWidth)  - parseInt(this.canvas.style.width))  / 2 + "px"; 
		this.canvas.style.top  				= (parseInt(window.innerHeight) - parseInt(this.canvas.style.height)) / 2 + "px"; 
	}, 
	pause : function(){
		clearInterval(this.interval);
		pause = true;
	},
	unpause : function(){
		clearInterval(this.interval);
		this.interval = setInterval(gameLoop, gameSpeed);
		pause = false;
	}
}

