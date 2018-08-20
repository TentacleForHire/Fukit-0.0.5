











window.addEventListener("keyup", onKeyUp);
function onKeyUp(e) {
	keyIsDown = false;
	
	for (i = 0; i != players.length; i++){
		players[i].idle();
	}
	
	speed = speed - speed;

}













































