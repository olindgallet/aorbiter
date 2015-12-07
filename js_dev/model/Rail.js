/**
  author Olin Gallet (olindgallet@olingallet.com)
  date   12/3/2015
 */

/**
 * The Rail represents the rail the ship runs on.
 * @class Rail
 * @constructor
 */
function Rail(radius){
	this.shipPosition = 0;
	this.radius           = radius;
}

Rail.prototype = {
	/**
	 * Moves the ship down.
	 * @param distance {int} the distance to move the ship
	 * @method moveShipDown
	moveShipDown: function(distance){
		this.shipPosition = this.shipPosition + distance;
		if (this.shipPosition > this.radius){
			this.shipPosition = this.radius;
		}
	}, 
	/**
	 * Moves the ship up.
	 * @param distance {int} the distance to move the ship
	 * @method moveShipUp
	 */
	moveShipUp: function(distance){
		this.shipPosition = this.shipPosition - distance;
		if (this.shipPosition < this.radius * -1){
			this.shipPosition = this.radius * -1;
		}
	}
}
