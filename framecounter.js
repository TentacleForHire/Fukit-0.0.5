// Code for Fukit (Video Game) written by Benjamin Aarli. 
// written wednesday, 25th of july.

//  This just hides loaded elements behind it  //
// --- --- --- --- --- --- --- --- --- --- --- //


// --- FPS Counter --- // 
var frames;
var interval;
var set; 

var fpsContainer;
var fps;

var active;

var frameCounter = [
	fpsContainer = document.createElement("div"),
	fps = document.createElement("p"),
]

var counter = {
	set : function(){
		frameCounter[0].style.position = 'relative';
		frameCounter[0].style.width = 40 + 'px';
		frameCounter[0].style.height = 25 + 'px';
		frameCounter[0].style.left = 25 + 'px';
		frameCounter[0].style.top = 25 + 'px';
		frameCounter[0].style.backgroundColor = 'white';
		frameCounter[0].id = 'fpsContainer';
		
		frameCounter[1].style.position = 'absolute';
		frameCounter[1].style.width = 50 + 'px';
		frameCounter[1].style.height = 25 + 'px';
		frameCounter[1].style.left = 8 + 'px';
		frameCounter[1].style.top = -15 + 'px';
		frameCounter[1].id = "fps";
		frameCounter[1].innerHTML = 'Number';
		
		document.body.appendChild(frameCounter[0]);
		document.getElementById("fpsContainer").appendChild(frameCounter[1]);
		
		active = true;

		checkFPS();
		
		console.log("set is executed")
 	},
	count : function(){ 
			// Count the frame. 
			frames += 1;
	}, 
	stop : function(){
			clearInterval(interval);
	}
};

function checkFPS(){
	document.getElementById('fps').innerHTML = frames;
	
	frames = 0;
	
	if (interval == undefined) { // if the interval isen't active, continue. 
		interval = setInterval(function() { // set the interval. 
		checkFPS();  
		console.log("a second has passed");
		}, 1000);
	}
}
