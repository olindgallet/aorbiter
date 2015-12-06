/**
  author Olin Gallet (olindgallet@olingallet.com)
  date   12/3/2015
 */

/**
 * PlayerShots is a data structure that maintains information about the player shots.
 * @class PlayerShots
 * @constructor
 */
function PlayerShots(){
	this.playerShots = [];
}

PlayerShots.prototype = {
	/**
	 * Adds a shot to the data structure.
	 * @param shot {Shot} the shot to add
	 * @method addShot
	 */
	addShot: function(shot){
		this.playerShots.push(shot);
	},
	
	/**
	 * Moves all shots in the field.  If they fall out of bounds, remove them.
	 * Since the shots can only currently move left and right, only look at width
	 * @param width {int} the width of the field
	 * @method moveShots
	 */
	moveShots: function(width){
		var i = 0;
		while (i < this.playerShots.length){
			this.playerShots[i].move();
			if (this.playerShots[i] < 0 || this.playerShots[i] > width){
				this.playerShots.splice(i, 1);
			}
			i = i + 1;
		}
	}
}