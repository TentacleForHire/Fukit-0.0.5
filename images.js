// Code for Fukit (Video Game) written by Benjamin Aarli. 
// written tuesday, 24th of july.

//  This just hides loaded elements behind it  //
// --- --- --- --- --- --- --- --- --- --- --- //

// LOAD EVERYTHING // 
var image = function(source){
	var image = document.createElement("img");
	image.src = source;
	return image;
}

// Torched // 
var torched_A_Idle_R  = "images/torched/Torched_A_Idle_R_Spritesheet.png";
var torched_A_Walk_R  = "images/torched/Torched_A_Walk_R_Spritesheet.png";
var torched_B_Idle_R  = "images/torched/Torched_B_Idle_R_Spritesheet.png"; 
var torched_B_Walk_R  = "images/torched/Torched_B_Walk_R_Spritesheet.png"; 
var torched_A_Idle_L  = "images/torched/Torched_A_Idle_L_Spritesheet.png";
var torched_A_Walk_L  = "images/torched/Torched_A_Walk_L_Spritesheet.png";
var torched_B_Idle_L  = "images/torched/Torched_B_Idle_L_Spritesheet.png"; 
var torched_B_Walk_L  = "images/torched/Torched_B_Walk_L_Spritesheet.png"; 
var torched_Attack_R  = "images/torched/Torched_A_Attack_R_Spritesheet.png"; 
var torched_Attack_L  = "images/torched/Torched_A_Attack_L_Spritesheet.png"; 
var torched_Hurt_R    = "images/torched/Torched_Hurt_R_Spritesheet.png";
var torched_Hurt_L    = "images/torched/Torched_Hurt_L_Spritesheet.png";
var torched_sleeping  = "images/torched/Torched_Sleeping_Spritesheet.png";

// Cobber //
var cobber_A_Idle_R  = "images/cobber/cobber_A_Idle_R_Spritesheet.png";   
var cobber_A_Idle_L  = "images/cobber/cobber_A_Idle_L_Spritesheet.png";
var cobber_A_Walk_R  = "images/cobber/cobber_A_Walk_R_Spritesheet.png";
var cobber_A_Walk_L  = "images/cobber/cobber_A_Walk_L_Spritesheet.png";
var cobber_B_Idle_R  = "images/cobber/cobber_B_Idle_R_Spritesheet.png";
var cobber_B_Idle_L  = "images/cobber/cobber_B_Idle_L_Spritesheet.png"; 
var cobber_B_Walk_R  = "images/cobber/cobber_B_Walk_R_Spritesheet.png"; 
var cobber_B_Walk_L  = "images/cobber/cobber_B_Walk_L_Spritesheet.png"; 
var cobber_Attack_R  = "images/cobber/cobber_Attack_R_Spritesheet.png"; 
var cobber_Attack_L  = "images/cobber/cobber_Attack_L_Spritesheet.png"; 
var cobber_Hurt_R    = "images/torched/Torched_Hurt_R_Spritesheet.png";
var cobber_Hurt_L    = "images/torched/Torched_Hurt_L_Spritesheet.png";

// Priest // 
var priest_A_Idle_R  = "images/priest/priest_A_Idle_R_Spritesheet.png";
var priest_A_Walk_R  = "images/priest/priest_A_Walk_R_Spritesheet.png";
var priest_B_Idle_R  = "images/priest/priest_B_Idle_R_Spritesheet.png"; 
var priest_B_Walk_R  = "images/priest/priest_B_Walk_R_Spritesheet.png"; 
var priest_A_Idle_L  = "images/priest/priest_A_Idle_L_Spritesheet.png";
var priest_A_Walk_L  = "images/priest/priest_A_Walk_L_Spritesheet.png";
var priest_B_Idle_L  = "images/priest/priest_B_Idle_L_Spritesheet.png"; 
var priest_B_Walk_L  = "images/priest/priest_B_Walk_L_Spritesheet.png"; 
var priest_Attack_R  = "images/priest/priest_A_Attack_R_Spritesheet.png"; 
var priest_Attack_L  = "images/priest/priest_A_Attack_L_Spritesheet.png"; 
var priest_Hurt_R    = "images/priest/priest_Hurt_R_Spritesheet.png";
var priest_Hurt_L    = "images/priest/priest_Hurt_L_Spritesheet.png";
var priest_sleeping  = "images/priest/priest_Sleeping_Spritesheet.png";



// World Elements // 
var img_campfire_onFire = "World Elements/campfire_spritesheet.png";
var img_carpeted_couch = "World Elements/carpeted_couch.png";
var img_bartender = "World Elements/bartender_spritesheet.png";

// Backgrounds //
var img_tavern = "images/backgrounds/tavern.png";

// Effects // 
var rain_splash = new image("images/effects/raindrop_splash.png");
var fog_effect = new image("images/effects/fog.png");

// Audio // 
























