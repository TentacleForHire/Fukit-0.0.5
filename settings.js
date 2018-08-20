
var elem;

var settings_are_open = false;
var buttons = [];

new function(){
	var elem = document.createElement("div");
	elem.id 			= "settings_menu";
	elem.style.width 	= "20px"; 
	elem.style.height 	= "20px";
	elem.style.backgroundColor = "red";
	elem.style.left 	= "20px"; 
	elem.style.top 		= "20px"; 
	elem.style.position = "absolute";
	elem.onclick = function(){
		if (settings_are_open == false){
			elem.style.width 	= parseInt(window.innerWidth) - 50 + "px"; 
			elem.style.height 	= parseInt(window.innerHeight) - 60 + "px";
			elem.style.backgroundColor = "red";
			elem.style.left 	= 25 + "px"; 
			elem.style.top 		= "10px"; 
			elem.style.position = "absolute";
			
			for (i = 0; i != buttons.length; i++){
				buttons[i].style.width = "100px";
			}
			
			settings_are_open 	= true;
		} else {
			elem.style.width 	= "20px"; 
			elem.style.height 	= "20px";
			elem.style.backgroundColor = "red";
			elem.style.left 	= "20px"; 
			elem.style.top 		= "20px"; 
			elem.style.position = "absolute";
			
			for (i = 0; i != buttons.length; i++){
				buttons[i].style.width = "0px";
			}
			
			settings_are_open 	= false;
		}
		console.log("You Clicked Me!");
	};
	document.body.appendChild(elem);
	
}

makeButton("changeSpeed", function(){	
		  if (players[0].player == "torched"){
		players.splice(0, 1, new character(64 + 32, 64 + 32, "cobber", 50, 0, "transparent"));
	} else if (players[0].player == "cobber"){
		players.splice(0, 1, new character(64 + 32, 64 + 32, "priest", 50, 0, "transparent"));
	} else if (players[0].player == "priest"){
		players.splice(0, 1, new character(64 + 32, 64 + 32, "priest", 50, 0, "transparent"));
	} 
	
	console.log(players[0].player);
	players[0].idle();
})

makeButton("haha", function(){
	console.log(buttons);
})

function makeButton(name, func){
	var button = document.createElement("div");
	button.id 				= name;
	button.style.width 		= "0px"; 
	button.style.height 	= "60px";
	button.style.backgroundColor = "black";
	button.style.left 		= 40 + "px"; 
	button.style.top 		= 20 + 80 * buttons.length + "px"; 
	button.style.position 	= "absolute";
	button.onclick = func;
	
	buttons.push(button);
	document.body.appendChild(button);
}







