/**
 * Makes a new InputObserver.
 */
function InputObserver(){
	this.isAcceptingInput = true;
}

InputObserver.prototype.isPausePressed = function(){
	return gamepadStatus.controlButtons.start;
};

InputObserver.prototype.isShootPressed = function(){
	return gamepadStatus.faceButtons.a;
};

InputObserver.prototype.isComboPressed = function(){
	return gamepadStatus.faceButtons.b;
};

InputObserver.prototype.isShovePressed = function(){
	return gamepadStatus.shoulderButtons.topLeftShoulder || gamepadStatus.shoulderButtons.topRightShoulder ||
				gamepadStatus.shoulderButtons.bottomLeftShoulder || gamepadStatus.shoulderButtons.bottomRightShoulder;
}

InputObserver.prototype.isUpPressed = function(){
	return gamepadStatus.directionalPad.up || gamepadStatus.joystick.leftStick.up;
}

InputObserver.prototype.isDownPressed = function(){
	return gamepadStatus.directionalPad.down || gamepadStatus.joystick.leftStick.down;
}

InputObserver.prototype.isLeftPressed = function(){
	return gamepadStatus.directionalPad.left || gamepadStatus.joystick.leftStick.left;
}

InputObserver.prototype.isRightPressed = function(){
	return gamepadStatus.directionalPad.right || gamepadStatus.joystick.leftStick.right;
}

InputObserver.prototype.resetState = function(){
	gamepadStatus.controlButtons.start      = false;
	gamepadStatus.faceButtons.a                   = false;
	gamepadStatus.faceButtons.b                  = false;
	gamepadStatus.directionalPad.up            = false;
	gamepadStatus.directionalPad.down     = false;
	gamepadStatus.directionalPad.left        = false;
	gamepadStatus.directionalPad.right      = false;
	gamepadStatus.joystick.leftStick.up         = false;
	gamepadStatus.joystick.leftStick.down  = false;
	gamepadStatus.joystick.leftStick.right  = false;
	gamepadStatus.joystick.leftStick.left    = false;
	gamepadStatus.shoulderButtons.topLeftShoulder         = false;
	gamepadStatus.shoulderButtons.topRightShoulder       = false;
	gamepadStatus.shoulderButtons.bottomLeftShoulder   = false;
	gamepadStatus.shoulderButtons.bottomRightShoulder = false;
}

/**
 * Handles the keyboard.
 */
var listener = new window.keypress.Listener();
listener.register_combo({
    "keys"                 : "right",
    "on_keydown"    : function(){ gamepadStatus.directionalPad.right = true; },
    "on_keyup"         : function(){ gamepadStatus.directionalPad.right = false; }
});
listener.register_combo({
	"keys"	             : "left",
	"on_keydown"  : function(){ gamepadStatus.directionalPad.left   = true; },
	"on_keyup"       : function(){ gamepadStatus.directionalPad.left = false;}
});
listener.register_combo({
	"keys"	             : "up",
	"prevent_default"   : true,
	"on_keydown"  : function(){ gamepadStatus.directionalPad.up   = true; },
	"on_keyup"       : function(){ gamepadStatus.directionalPad.up = false;}
});
listener.register_combo({
	"keys"	             : "down",
	"prevent_default"   : true,
	"on_keydown"  : function(){ gamepadStatus.directionalPad.down   = true; },
	"on_keyup"       : function(){ gamepadStatus.directionalPad.down = false;}
});
listener.register_combo({
	"keys"	             : "f",
	"prevent_default"   : true,
	"on_keydown"  : function(){ gamepadStatus.faceButtons.a  = true; },
	"on_keyup"       : function(){ gamepadStatus.faceButtons.a  = false;}
});
listener.register_combo({
	"keys"              : "space",
	"prevent_default"   : true,
	"on_keydown" : function(){ gamepadStatus.faceButtons.b = true; },
	"on_keyup"      : function(){ gamepadStatus.faceButtons.b = false; }
});
listener.register_combo({
	"keys"                   : "g",
	"prevent_default" : true,
	"on_keydown"      : function() { gamepadStatus.shoulderButtons.topRightShoulder = true; },
	"on_keyup"          : function() { gamepadStatus.shoulderButtons.topRightShoulder  = false; }
});