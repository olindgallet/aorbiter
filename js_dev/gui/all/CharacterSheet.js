/**
  author Olin Gallet (olindgallet@olingallet.com)
  date   12/10/2014
 */

/**
 * A CharacterSheet is used to hold data for a character
 * and provide functions for getting individual images from it.
 * Character sheets are made from GameCharacterHub with 
 * each sheet being a 4x4 character sheet.
 * @class CharacterSheet
 * @constructor
 * @param location    {String}      the location of the tile sheet
 * @param frameWidth  {int}         the width of a frame
 * @param frameHeight {int}         the height of a frame
 */
function CharacterSheet(location, frameWidth, frameHeight){
	this.source           = new createjs.Bitmap(location);
	this.frameWidth   = frameWidth;
	this.frameHeight  = frameHeight;
	this.frames          = [];
	
	var x = 0;
	var y = 0;
	while (y < 4){
		while (x < 4){
			this.frames.push(this.source.clone());
			this.frames[this.frames.length - 1].sourceRect = new createjs.Rectangle(x * this.frameWidth, y * this.frameHeight, this.frameWidth, this.frameHeight);
			x = x + 1;
		}
		x = 0;
		y = y + 1;
	}
}

CharacterSheet.prototype = {
	/**
	 * Returns the specified frame.
	 * @method getFrame
	 * @param index {int} the index of the frame to get; the number is calculated based on the frame width and frame height, ie frame 0 = the frame at 0,0, frame 1 = the frame at frameWidth, 0, etc.
	 * @return {Bitmap} a copy of the specified frame.
	 */
	getFrame: function(index){
		return this.frames[index].clone();
	}
};