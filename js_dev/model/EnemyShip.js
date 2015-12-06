/**
  author Olin Gallet (olindgallet@olingallet.com)
  date   12/5/2015
 */

/**
 * An EnemyShip represents an enemy ship as a circle.
 * Upon collision with the loading shield or player shots, they are destroyed.
 * Upon collision with the player ship, the game is over.
 * @class EnemyShip
 * @param x {int} the x position of the shot
 * @param y {int} the y position of the shot
 * @param xVelocity {int} the magnitude and direction of the ship; negative means go left, positive means go right
 * @param yVelocity {int} the magnitude and direction of the ship; negative means go up, positive means go down
 * @param radius {int} the radius of the enemy ship
 * @constructor
 */
function EnemyShip(x, y, xVelocity, yVelocity, radius){
	this.x = x;
	this.y = y;
	this.xVelocity = xVelocity;
	this.yVelocity = yVelocity;
	this.radius = radius;
}

EnemyShip.prototype = {
	/**
	 * Checks if the enemy ship is colliding with the provided circle.
	 * Uses algorithm from: http://cgp.wikidot.com/circle-to-circle-collision-detection
	 */
	isColliding: function(x, y, radius){
		return Math.sqrt( ( this.x - x ) * ( this.x - x )  + ( this.y - y ) * ( this.y - y ) ) < ( radius + this.radius );
	},
	
	/**
	 * Moves the ship based on values provided at instantiation.
	 * @method move
	 */
	move: function(){
		this.x = this.x + this.xVelocity;
		this.y = this.y + this.yVelocity;
	}
}