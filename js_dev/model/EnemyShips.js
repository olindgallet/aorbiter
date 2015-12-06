/**
  author Olin Gallet (olindgallet@olingallet.com)
  date   12/3/2015
 */

/**
 * EnemyShips is a data structure that maintains information about the enemy ships..
 * @class EnemyShips
 * @constructor
 */
function EnemyShips(){
	this.enemyShips = [];
}

EnemyShips.prototype = {
	/**
	 * Moves all enemy ships in the field.  If they fall out of bounds, remove them.
	 * @param width {int} the width of the field
	 * @param height {int} the height of the field
	 * @method moveShots
	 */
	moveShips: function(width, height){
		var i = 0;
		while (i < this.enemyShips.length){
			this.enemyShips[i].move();
			if (this.enemyShips[i].x < 0 || this.enemyShips[i].x > width || this.enemyShips[i].y < 0 || this.enemyShips[i].y > height){
				this.enemyShips.splice(i, 1);
			}
			i = i + 1;
		}
	},
	
	/**
	 * Adds an enemy ship.  Enemy ships will spawn at either (0 || maxX, 0 || maxY).
	 * Uses code from https://coderwall.com/p/vcom6g/quick-coin-flip-heads-tails-function-in-javascript for simulated
	 * coin flip and https://www.developphp.com/video/JavaScript/Dice-Roll-Programming-Tutorial-For-Web-Browser-Games
	 * for a simulated die roll
	 * @param maxX {int} the max X value to spawn the ship
	 * @param maxY {int} the max Y value to spawn the ship
	 * @param radius {int} the radius of the ship
	 * @method addShot
	 */
	spawnShip: function(maxX, maxY, radius){
		var x = 0;
		var y = 0;
		var xVelocity  = Math.floor(Math.random() * 6) + 1;
		var yVelocity  = Math.floor(Math.random() * 6) + 1;
		
		if (Math.floor(Math.random() * 2) === 0){
			x               = maxX;
			xVelocity = xVelocity * -1
		} 
		
		if (Math.floor(Math.random() * 2) === 0){
			y               = maxY;
			yVelocity  = yVelocity * -1;
		} 

		this.enemyShips.push(new EnemyShip(x, y, xVelocity, yVelocity, radius));
	},
	
}