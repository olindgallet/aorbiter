/**
  author Olin Gallet (olindgallet@olingallet.com)
  date   12/4/2015
 */

/**
 * A Shot is a data structure that maintains information about an entity's shots.
 * Shots currently are programmed to go either left or right.
 * It contains information about its position and its speed.  
 * @class Shot
 * @param x         {int} the x position of the shot
 * @param y         {int} the y position of the shot
 * @param velcity {int} the magnitude and direction of the shot; negative means go left, positive means go right
 * @constructor
 */
function Shot(x, y, velocity){
	this.x = x;
	this.y = y;
	this.velocity = velocity
}

Shot.prototype = {
	/**
	 * Moves the shot based on values provided at instantiation.
	 * @method move
	 */
	move: function(){
		this.x = this.x + this.velocity;
	}
}