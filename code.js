// Code for Fukit (Video Game) written by Benjamin Aarli. 
// written wednesday, 25th of july.

//  This just hides loaded elements behind it  //
// --- --- --- --- --- --- --- --- --- --- --- //

var gameSpeed 	= 20; // Amount of Times the game is executed per second. 
var speed 		= 1;  // Amount of Pixels that the character move per execution. 

var camera;
var camx = 120; // Camera.x value. 
var camy =  80; // Camera.y value.

var constructors = [];
var updates = [];

var players = [
	new character(64 + 32, 64 + 32, "Cobber", 50, 0, "transparent"),
	new character(64 + 32, 64 + 32, "Torched", 50, 0, "transparent"),
];

var p1_previous_location = players[0].x;
var p2_previous_location = players[1].x;

function map(num){
	if (num == 0 || num == "tavern") { // TAVERN // 
	
		var background_img = new image(img_tavern);

		background = new element(480, 160, -120, 0, "transparent", background_img);

		// Background Elements //
		if (players[0].character != "Torched" || players[2].character != "Torched") {
			var couch_img 	= new image(img_carpeted_couch);
			var couch 		= new element(64 + 32, 64 + 32, -100, 1, "transparent", couch_img);
		} else {
			var couch_img 	= new image(img_carpeted_couch);
			var couch 		= new element(64 + 32, 64 + 32, -100, 1, "transparent", couch_img);
		};

		updates.push(function () { background.update(); },);
		updates.push(function () { couch.update();		},);
		
		console.log(updates);
		
	}
	if (num == 1 || num == "outside") { // OUTSIDE //
		
	}
}


var numb = 0;

function keyStrokeMess() {
	if (keyState[27]) { // --- --- --- The ESC key.
		if (pause != true) { gameScreen.pause(); } else { gameScreen.unpause(); };
	} // --- //
	
	if (keyState[65]) { // The A key. // WASD (A) //
		if (camx >= 0) { camx = camx - players[0].speed; };
		players[0].moveL();
	} // --- //
	
	if (keyState[68]) { // The D key. // WASD (D) //
		if (camx <= 240) { camx = camx + players[0].speed; };
		players[0].moveR();	
	} // --- //
	
	if (keyState[83]) { // --- --- ---  The S key.    // WASD (S) //
		if (players[0].invenOpen != true) { players[0].inventory(); } else { players[0].invenOpen = false; };
	} // --- //
	
	if (keyState[37]) {
		players[1].moveL();
	}
	
	if (keyState[39]) {
		players[1].moveR();
	}
	
	if (keyState[87]) { // --- --- The W key.    // WASD (W) // 
		console.log(camy);
		if (numb == 0) {
			players[0].character = "Cobber";
			numb++;
		} else if (numb == 1) {
			players[0].character = "Torched";
			numb++;
		} else if (numb == 2) {
			players[0].character = "Priest";
			numb++;
		} else {
			numb = 0;
		}
		
	} // --- //
	
	if (keyState[16]) {
		this.runSpeed = 5;
	}
	
	if (keyState[69]) { // --- --- The E Key. // 
		players[0].interact();
	}
} 

var keyState = {};    
window.addEventListener('keydown',function(e){
    keyState[e.keyCode || e.which] = true;
},true);    
window.addEventListener('keyup',function(e){
    keyState[e.keyCode || e.which] = false;
},true);

new function(){
	gameScreen.context = gameScreen.canvas.getContext("2d");
	camera = new Camera(gameScreen.context);
	gameScreen.start();
	
	for (i = 0; i != players.length; i++) {
		players[i].idle();
	}

	map(0);
	
	constructors.push(counter.set);
	updates.push(counter.count);

	for (i = 0; i != constructors.length; i++) {
		constructors[i]();
	}
	
	alert("Use WASD to move player 1.\nUse Arrow Keys to move player 2 \n Player 1 Attacks, player 2 lights");
	
}

function gameLoop(){
	gameScreen.clear();
	camera.begin();
	
	for (i = 0; i != updates.length; i++) { // general updates for level and enemies
		updates[i]();
	}
	
	keyStrokeMess();
	for (i = 0; i != players.length; i++){ // Player updates
		players[i].update();
	}

	if (players[0].invenOpen === true) { 
		players[0].inventory();
	}
	
	makeRain(0.2);
	
	camera.zoomTo(240, 160);
	camera.moveTo(camx, camy);
	camera.end();
}

