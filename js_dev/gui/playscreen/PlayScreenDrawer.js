/**
  author Olin Gallet (olindgallet@olingallet.com)
  date   12/6/2015
 */
 /**
  * The PlayScreenDrawer draws various sprites and text for the
  * play screen.
 */
var PlayScreenDrawer = (function() {
	return {		
		/**
		 * Draws the attract text.
		 * @param layerNumber {int} the layer number to draw on
		 */
		drawAttractText: function(layerNumber){
			var text = TextUtilities.makeText(50, 40, 'Press An Arrow Key To Start', 20, '#fff');
			 Canvas.addComponent(layerNumber, text);
		},
		
		/**
		 * Draws the background.
		 * @param x                    {int} the x coordinate to draw the cache at
		 * @param y                    {int} the y coordinate to draw the catche at
		 * @param layerNumber {int} the layer number to draw on
		 */
		 drawBackground: function(x, y, layerNumber){
			return false;
		 },
		 
		 /**
		  * Draws the enemy ships.
		  * @param layerNumber {int} the layer number to draw on
		  */
		 drawEnemyShips: function(layerNumber){
			 var i = 0;
			 var shape;
			 while (i < GameState.getEnemyShips().length){
				 shape = new createjs.Shape();
				 shape.graphics.beginStroke(GraphicsConstants.elements.enemyShip.COLOR);
				 shape.graphics.setStrokeStyle(1);
				 shape.graphics.beginFill(GraphicsConstants.elements.enemyShip.COLOR);
				shape.graphics.arc(GameState.getEnemyShips()[i].x, GameState.getEnemyShips()[i].y, GraphicsConstants.elements.enemyShip.RADIUS, 0, Math.PI * 2, false);
				Canvas.addComponent(layerNumber, shape);
				i = i + 1;
			 }
		 }, 
		 
		 /**
		  * Draws the final score.
		  * @param {int} the layer number to draw on
		  */
		 drawFinalScore: function(layerNumber){
			  var text = TextUtilities.makeText(10, 460, "Final:" + GameState.getFinalPlayerScore() + " to " + GameState.getFinalEnemyScore(), 20, '#fff');
			 Canvas.addComponent(layerNumber, text);
		 },
		 
		 /**
		  * Draws the loading shield.
		  * @param endAngle       (int) the ending angle in radians to draw
		  * @param layerNumber (int) the layer number to draw on
		  */
		 drawLoadingShield: function(endAngle, layerNumber){
			 var shape = new createjs.Shape();
			 shape.graphics.moveTo(GraphicsConstants.elements.loadingShield.X, GraphicsConstants.elements.loadingShield.Y)
			 shape.graphics.beginStroke(GraphicsConstants.elements.loadingShield.COLOR);
			 shape.graphics.setStrokeStyle(3);
			 shape.graphics.arc(GraphicsConstants.elements.loadingShield.X, GraphicsConstants.elements.loadingShield.Y, GraphicsConstants.elements.loadingShield.RADIUS, 0, endAngle, false);
			 Canvas.addComponent(layerNumber, shape);
		 },
		 
		 /**
		  * Draws the player shots.
		  * @param {int} the layer number to draw on
		  */
		 drawPlayerShots: function(layerNumber){
			 var i = 0;
			 var shape;
			 while (i < GameState.getPlayerShots().length){
				 shape = new createjs.Shape();
				 shape.graphics.beginStroke(GraphicsConstants.elements.playerShot.COLOR);
				 shape.graphics.setStrokeStyle(1);
				 shape.graphics.beginFill(GraphicsConstants.elements.playerShot.COLOR);
				shape.graphics.arc(GameState.getPlayerShots()[i].x, GameState.getPlayerShots()[i].y, GraphicsConstants.elements.playerShot.RADIUS, 0, Math.PI * 2, false);
				Canvas.addComponent(layerNumber, shape);
				i = i + 1;
			 }
		 },
		 
		 /**
		  * Draws the player score.
		  * @param layerNumber {int} the layer number to draw on
		  */
		 drawPlayerScore: function(layerNumber){
			 var text = TextUtilities.makeText(10, 30, "Your Points:" + GameState.getPlayerScore(), 20, '#fff');
			 Canvas.addComponent(layerNumber, text);
		 },
		 
		 /**
		  * Draws the enemy score.
		  * @param layerNumber {int} the layer number to draw on
		  */
		 drawEnemyScore: function(layerNumber){
			 var text = TextUtilities.makeText(310, 30, "Enemy Points:" + GameState.getEnemyScore(), 20, '#fff');
			 Canvas.addComponent(layerNumber, text);
		 },
		 
		 /**
		  * Draws the rail the player ship moves on.
		  * @param layerNumber {int} the layer number to draw on
		  */
		 drawRail: function(layerNumber){
			 var shape = new createjs.Shape();
			 shape.graphics.moveTo(GraphicsConstants.elements.rail.X, GraphicsConstants.elements.rail.Y);
			 shape.graphics.beginStroke(GraphicsConstants.elements.rail.COLOR);
			 shape.graphics.setStrokeStyle(1);
			 shape.graphics.lineTo(GraphicsConstants.elements.rail.X, GraphicsConstants.elements.rail.Y - GraphicsConstants.elements.rail.RADIUS);
			 shape.graphics.lineTo(GraphicsConstants.elements.rail.X, GraphicsConstants.elements.rail.Y + GraphicsConstants.elements.rail.RADIUS);
			 Canvas.addComponent(layerNumber, shape);
		 },
		 
		 /**
		  * Draws the player ship.
		  * @param layerNumber {int} the layer number to draw on
		  */
		 drawPlayerShip: function(layerNumber){
			 var shape = new createjs.Shape();
			 shape.graphics.moveTo(GraphicsConstants.elements.rail.X, GameState.getPlayerShipPosition() + GraphicsConstants.elements.rail.Y);
			 shape.graphics.beginStroke(GraphicsConstants.elements.playerShip.COLOR);
			 shape.graphics.setStrokeStyle(1);
			 shape.graphics.beginFill(GraphicsConstants.elements.playerShip.COLOR);
			 shape.graphics.arc(GraphicsConstants.elements.rail.X, GameState.getPlayerShipPosition() + GraphicsConstants.elements.rail.Y, GraphicsConstants.elements.playerShip.RADIUS, 0, Math.PI * 2, false);
			 Canvas.addComponent(layerNumber, shape);
		 }
	}
})();