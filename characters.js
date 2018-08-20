// Code for Fukit (Video Game) written by Benjamin Aarli. 
// written friday, 10th of august.

function character(w, h, character, x, y, color){
	this.width 			= w; 
	this.height 		= h;
	this.character 		= character;
	this.x 				= x; 
	this.y 				= y + ((160) - this.height);
	
	this.i 				= 1;
	this.p 				= 1;
	this.iMax 			= 2;
	this.invenOpen;
	this.executed = false; 
	var every;
	this.per 			= every;
	this.facing 		= "right";
	
	this.speed 			= 0.1;
	this.runSpeed 		= 0;
	this.maxSpeed 		= 200;
	this.health 		= 100;
	
	var image = document.createElement("img"); 
	if (every == undefined) {every = 100;}
	
	this.idle = function(){ // IDLE // 
		
		// Set every back to normal //
		/* */ this.i 			= 0;  // --- //
		/* */ this.p 			= 1;  // --- //
		/* */ this.iMax 		= 2;  // --- //
		/* */ this.per	 		= 50; // --- //
		/* */ this.speed 		= 1;  // --- //
		/* */ this.maxSpeed 	= 2.5;  // --- //
		/* */ this.invenOpen 	= false;// - //
		/* */ every 			= 100;  // - //
		/* */ this.executed 	= false;// - //
		// --- --- --- --- --- --- //
		
		if (this.health > 50) {
			if (this.facing == "right") {
				this.character = character + "_A_Idle_R";
			} else {
				this.character = character + "_A_Idle_L";
			} 
		} else {
				if (this.facing == "right") {
					this.character = character + "_B_Idle_R";
				} else {
					this.character = character + "_B_Idle_L";
				} 
		}
	}
	
	this.moveR = function(){
		if (this.invenOpen != true) {
			
			every 	   = 15;
			if (this.character == "Cobber") {
				this.iMax  = 2;
			} else if (this.character == "Torched") {
				this.iMax  = 4;
			} else if (this.character == "Priest") { 
				this.iMax  = 4;
			}
			
			
			if (this.health > 50) {
				this.character = character + "_A_Walk_R";
			} else {
				this.character = character + "_B_Walk_R";
			}
			
			this.facing = "right";
			
			// Gain speed if walking //
			if (this.speed > this.maxSpeed) {
				this.speed = this.maxSpeed;
			} else {
				this.speed++; 
				this.speed += this.runSpeed;
			}
			
			this.x = this.x + this.speed;
			
		} else {
			// Code Here //
		}
	}
	this.moveL = function(){
		if (this.invenOpen != true) {
			
			every 	   = 15; // Change sprite (every / 1000)
			
			if (this.character == "Cobber") {
				this.iMax  = 2;
			} else if (this.character == "Torched") {
				this.iMax  = 4;
			} else if (this.character == "Priest") { 
				this.iMax  = 4;
			}
			
			if (this.health > 50) {
				this.character = character + "_A_Walk_L";
			} else {
				this.character = character + "_B_Walk_L";
			}
			
			this.facing = "left";
			
			// Gain speed if walking //
			if (this.speed > this.maxSpeed + this.runSpeed) {
				this.speed = this.maxSpeed + this.runSpeed;
			} else {
				this.speed++; 
				this.speed += this.runSpeed;
			}
			
			this.x = this.x - this.speed;
			
		} else { 
			// Code Here //
		}
	}
	
	this.inventory = function(){
		
		this.invenOpen = true;
		
		this.iMax  = 3;
		this.x = this.x; 
		
		every = 25;
		
		if (this.i != 1 && this.executed != true) {
			this.i 	  = 1;
			this.executed = true;
		} else if (this.i == this.iMax) {
			this.i     = this.iMax; 
			this.p     = 0;	
		}
		
		if (this.health > 50) {
			if (this.facing == "right") {
				this.character = character + "_A_Crouch_R";
			} else {
				this.character = character + "_A_Crouch_L";
			} 
		} else {
				if (this.facing == "right") {
					this.character = character + "_A_Crouch_R";
				} else {
					this.character = character + "_A_Crouch_L";
				} 
		}
		
		if (this.executed == true) {
			
		}
		
	}

	this.interact = function(){
		if (this.invenOpen != true) {
		}
	}
	this.update = function(){
		ctx = gameScreen.context;
		ctx.fillStyle = color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
		
		image.src = "images/" + character + "/" + this.character + "_Spritesheet.png";
		ctx.drawImage(image, this.i * 64, 0, 64, 64, this.x, this.y, this.width, this.height);
		
		this.per = this.per - 4;
		
		if (this.per <= 0) {
			if (this.i > this.iMax) {
				this.i = 0; 
			} else {
				this.i = this.p + this.i;
			}
			this.per = every;
		}
	}
}

function element(w, h, x, y, color, image, imgnr, effect){
	this.width 			= w; 
	this.height 		= h; 
	this.x 				= x; 
	this.y 				= y + ((160) - this.height);
	
	this.i 				= 1; // current image of spritesheet.
	this.p 				= 1; // number to pluss this.i with? I don't know why it's important but I trust my past self enough to leave it be. 
	this.iMax 			= 2; // amount of images in spritesheet. 
	
	var every 			= 160; // every is amount of milliseconds between frames updates. 
	this.per 			= every; // The same as every but this one is effected by plusses and minuses. 

	this.facing 		= "right";
	
	this.health 		= 100;
	
	this.update = function(){
		ctx = gameScreen.context;
		ctx.fillStyle = color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
		if (imgnr == undefined) {
			ctx.drawImage(image, this.x, this.y, this.width, this.height);
		} else {
			ctx.drawImage(image, this.i * 64, 0, 64, 64, this.x, this.y, this.width, this.height);
			
			// Animation process //
			this.iMax = imgnr - 1; 
			this.per = this.per - 4; 
			
			if (this.per <= 0) { 			// if this.per is more then 0
				if (this.i >= this.iMax) { 	// if this.i is more or equal to this.iMax. 
					this.i = 0;  
				} else { 					// if not, pluss this.i with this.p.
					this.i = this.p + this.i;
				}
				this.per = every; 			// This per is equal every. 
			}
		}
	}
}