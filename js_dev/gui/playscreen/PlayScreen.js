var PlayScreen = (function() {
	return {	
		/**
		 * Load the playscreen.
		 */
		load: function(canvasName){
			Canvas.init(canvasName, GraphicsConstants.dimensions.WIDTH, GraphicsConstants.dimensions.HEIGHT, GraphicsConstants.LAYER_COUNT);
		},
		
		/**
		 * Render the game initially.
		 */
		render: function(){			
			PlayScreenDrawer.drawRail(GraphicsConstants.layers.BG);
			Canvas.update();
		},
		
		/**
		 * Unloads the playscreen
		 */
		unload: function(){
		},
		
		/**
		 * Updates the playscreen.
		 * Can be looped continually.
		 */
		update: function(){
			if (GameState.isGameStarted()){
				Canvas.clearLayer(GraphicsConstants.layers.SHIELD);
				Canvas.clearLayer(GraphicsConstants.layers.PLAYER);
				Canvas.clearLayer(GraphicsConstants.layers.PLAYER_ANIMATIONS);
				Canvas.clearLayer(GraphicsConstants.layers.ENEMY);
				Canvas.clearLayer(GraphicsConstants.layers.TEXT);
				
				if (FrameTimer.getCurrentFrame() % 5 === 0){
					GameState.increaseLoadingShield();
				}
				
				GameState.moveShots();
				GameState.moveEnemyShips();
				
				if (GameState.checkPlayerShotCollisions()){
					createjs.Sound.play(AudioConstants.sfxids.ENEMY_HIT);
				}
				
				if (GameState.checkPlayerCollisions()){
					createjs.Sound.play(AudioConstants.sfxids.PLAYER_HIT);
				}
				
				if (FrameTimer.getCurrentFrame() % 30 === 0){
					GameState.spawnEnemyShip();
				}
				
				var controller = GameControls.getPlayer1();
				
				if (controller.isUpPressed()) {
					GameState.moveShipUp();
				} else if (controller.isDownPressed()){
					GameState.moveShipDown();
				} else if (!FrameTimer.containsDelayedEvent('playerShot')){
						if (controller.isLeftPressed()){
							FrameTimer.addDelayedEvent('playerShot', 10);
							GameState.addPlayerShot(GraphicsConstants.elements.rail.X - GraphicsConstants.elements.playerShip.RADIUS, GameState.getPlayerShipPosition() + GraphicsConstants.elements.rail.Y, GraphicsConstants.elements.playerShot.SPEED * -1);
							createjs.Sound.play(AudioConstants.sfxids.PLAYER_SHOOT);
						} else if (controller.isRightPressed()){
							FrameTimer.addDelayedEvent('playerShot', 10);
							GameState.addPlayerShot(GraphicsConstants.elements.rail.X + GraphicsConstants.elements.playerShip.RADIUS, GameState.getPlayerShipPosition() + GraphicsConstants.elements.rail.Y, GraphicsConstants.elements.playerShot.SPEED);
							createjs.Sound.play(AudioConstants.sfxids.PLAYER_SHOOT);
						}
				}
				
				if (GameState.isLoadingComplete() && !GameState.isGameOver()){
					GameState.endGame();
					GameState.setFinalPlayerScore(GameState.getPlayerScore());
					GameState.setFinalEnemyScore(GameState.getEnemyScore());
				}
				
				FrameTimer.advanceFrame();
				PlayScreenDrawer.drawLoadingShield(GameState.getLoadingShieldRadians(), GraphicsConstants.layers.SHIELD);			
				PlayScreenDrawer.drawPlayerShip(GraphicsConstants.layers.PLAYER);
				PlayScreenDrawer.drawPlayerShots(GraphicsConstants.layers.PLAYER_ANIMATIONS);
				PlayScreenDrawer.drawEnemyShips(GraphicsConstants.layers.ENEMY);
				PlayScreenDrawer.drawPlayerScore(GraphicsConstants.layers.TEXT);
				PlayScreenDrawer.drawEnemyScore(GraphicsConstants.layers.TEXT);
				
				if (GameState.isGameOver()){
					PlayScreenDrawer.drawFinalScore(GraphicsConstants.layers.TEXT);
				}
				
				Canvas.update();
			} else {
				Canvas.clearLayer(GraphicsConstants.layers.TEXT);
				PlayScreenDrawer.drawAttractText(GraphicsConstants.layers.TEXT);
				var controller = GameControls.getPlayer1();
				if (controller.isUpPressed() || controller.isDownPressed() || controller.isLeftPressed() || controller.isRightPressed()){
					GameState.startGame();
				}
				Canvas.update();
			}
		}
	}
})();