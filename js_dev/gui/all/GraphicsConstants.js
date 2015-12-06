/**
  author Olin Gallet (olindgallet@olingallet.com)
  date   12/6/2015
 */
/**
 * GraphicsConstants holds constants used for drawing the game.  
 * It also has some location information for the model.
 */
var GraphicsConstants = (function() {
	return {
		LAYER_COUNT: 6,
		FPS: 60,
		
		dimensions: {
			WIDTH: 640,
			HEIGHT: 480
		},
		
		layers: {
			BG:                                   0,
			SHIELD:                           1,
			PLAYER:                          2,
			PLAYER_ANIMATIONS:  3,
			ENEMY:                           4,
			TEXT:                              5
		},
		
		elements:{
			loadingShield: {
				X: 320,
				Y: 240,
				COLOR: '#fff',
				RADIUS: 200
			},
			
			rail: {
				X: 320,
				Y: 240,
				COLOR: '#fff',
				RADIUS: 100
			},
			
			playerShip: {
				MOVE_DISTANCE: 5,
				COLOR: '#faafaa',
				RADIUS: 10
			},
			
			playerShot: {
				COLOR: '#faafaa',
				RADIUS: 5,
				SPEED: 5
			},
			
			enemyShip:{
				MOVE_DISTANCE: 3,
				COLOR: '#7eeadf',
				RADIUS: 20
			}
		}
	}
})();