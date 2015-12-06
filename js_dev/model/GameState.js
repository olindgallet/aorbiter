/**
  author Olin Gallet (olindgallet@olingallet.com)
  date   12/6/2015
 */
/**
 * GameState holds information about the game's current state.
 * It's used to communicate between the model and the visuals.
 */
var GameState = (function() {
	var loadingShield;
	var rail;
	var playerShots;
	var enemyShips;
	var scoreKeeper;
	var isGameOver;

	return {
		/**
		 * Adds a player shot to the screen.
		 * @param x           {int} the x coordinate of the shot
		 * @param y           {int} the y coordinate of the shot
		 * @param velocity {int} the magnitude and direction of the shot
		 */
		addPlayerShot: function(x, y, velocity){
			playerShots.addShot(new Shot(x, y, velocity));
		},
		
		/**
		 * Checks for collisions with the player shots.
		 * Removes any shots and enemies hit with the player shot and 
		 * increases the player screen.
		 * Returns true if a shot gets removed, false if not.
		 */
		checkPlayerShotCollisions: function(){
			var i = 0;
			var j = 0;
			var response = false;
			
			while (i < playerShots.playerShots.length && playerShots.playerShots.length > 0){
				while (j < enemyShips.enemyShips.length && enemyShips.enemyShips.length > 0){
					if (enemyShips.enemyShips[j].isColliding(playerShots.playerShots[i].x, playerShots.playerShots[i].y, GraphicsConstants.elements.playerShot.RADIUS)){
						scoreKeeper.increasePlayerScore();
						playerShots.playerShots.splice(i, 1);
						enemyShips.enemyShips.splice(j, 1);
						i = i - 1;
						j = j - 1;
						response = true;
					}
					j = j + 1;
				}
				i = i + 1;
				j = 0;
			}
			return response;
		},
		
		/**
		 * Checks for collisions with the player ship.
		 * Removes any enemies hit and increases the enemy score.
		 * Returns true if the player gets hit, false if not.
		 */
		checkPlayerCollisions: function(){
			var i = 0;
			var response = false;
			
			while (i < enemyShips.enemyShips.length){
				if (enemyShips.enemyShips[i].isColliding(GraphicsConstants.elements.rail.X, GameState.getPlayerShipPosition() + GraphicsConstants.elements.rail.Y, GraphicsConstants.elements.playerShip.RADIUS)){
					scoreKeeper.increaseEnemyScore();
					enemyShips.enemyShips.splice(i, 1);
					i = i - 1;
					response = true;
				}
				i = i + 1;
			}
			
			return response;
		},
		
		/**
		 * Ends the game.
		 */
		 endGame: function(){
			 isGameOver = true;
		 },
		 
		/**
		 * Returns the enemy score.
		 */
		getEnemyScore: function(){
			return scoreKeeper.enemyScore;
		},
		
		/**
		 * Returns the enemy ships.
		 */
		getEnemyShips: function(){
			return enemyShips.enemyShips;
		},
		
		/**
		 * Returns the final enemy score.
		 */
		 getFinalEnemyScore: function(){
			 return scoreKeeper.finalEnemyScore;
		 },
		 
		 /**
		  * Returns the final player score.
		  */
		 getFinalPlayerScore: function(){
			return scoreKeeper.finalPlayerScore;
		 },
		  
		/**
		 * Returns the current number of radians of the loading shield.
		 */
		getLoadingShieldRadians: function(){
			return loadingShield.radians;
		},
		
		/**
		 * Returns the player score.
		 */
		getPlayerScore: function(){
			return scoreKeeper.playerScore;
		},
		
		/**
		 * Returns the player shots.
		 */
		getPlayerShots: function(){
			return playerShots.playerShots;
		},
		
		/**
		 * Returns the player's position on the rail
		 */
		getPlayerShipPosition: function(){
			return rail.shipPosition;
		}, 
		
		/**
		 * Increases the enemy score.
		 */
		increaseEnemyScore: function(){
			scoreKeeper.increaseEnemyScore();
		},
		
		/**
		 * Increases the loading shield value.
		 */
		increaseLoadingShield: function(){
			loadingShield.increase();
		},
		
		/**
		 * Increases the player score.
		 */
		increasePlayerScore: function(){
			scoreKeeper.increasePlayerScore();
		},
		
		/**
		 * Returns if the game is over.
		 */
		 isGameOver: function(){
			 return isGameOver;
		 },
		 
		 /**
		  * Returns if the game is started.
		  */
		 isGameStarted: function(){
			 return isGameStarted;
		 },
		
		/**
		 * States if the loading shield is complete.
		 */
		 isLoadingComplete: function(){
			 return loadingShield.isComplete();
		 },
		
		/**
		 * Moves the enemy ships.
		 */
		moveEnemyShips: function(){
			enemyShips.moveShips(GraphicsConstants.dimensions.WIDTH, GraphicsConstants.dimensions.HEIGHT);
		},
		
		/**
		 * Moves the player ship up.
		 */
		moveShipUp: function(){
			rail.moveShipUp(GraphicsConstants.elements.playerShip.MOVE_DISTANCE);
		},
		
		/**
		 * Moves the player ship down.
		 */
		moveShipDown: function(){
			rail.moveShipDown(GraphicsConstants.elements.playerShip.MOVE_DISTANCE);
		},
		
		/**
		 * Moves the player shots.
		 */
		moveShots: function(){
			playerShots.moveShots();
		},
		
		/**
		 * Resets the game state to its starting state.
		 */
		reset: function(){
			loadingShield = new LoadingShield();
			rail                  = new Rail(GraphicsConstants.elements.rail.RADIUS);
			playerShots   = new PlayerShots();
			enemyShips = new EnemyShips();
			scoreKeeper = new ScoreKeeper();
			isGameOver = false;
			isGameStarted = false;
		},
		 
		/**
		 * Sets the final enemy score.
		 * @param score {int} the value of the final enemy score.
		 */
		setFinalEnemyScore: function(score){
			scoreKeeper.finalEnemyScore = score;
		},
		
		/**
		 * Sets the final player score.
		 * @param score {int} the value of the final player score
		 */
		setFinalPlayerScore: function(score){
			scoreKeeper.finalPlayerScore = score;
		},
		
		/**
		 * Spawns an enemy ship.
		 */
		spawnEnemyShip: function(){
			enemyShips.spawnShip(GraphicsConstants.dimensions.WIDTH, GraphicsConstants.dimensions.HEIGHT, GraphicsConstants.elements.enemyShip.RADIUS);
		},
		
		/**
		 * Starts the game.
		 */
		 startGame: function(){
			 isGameStarted = true;
		 }
	}
})();