/**
  author Olin Gallet (olindgallet@olingallet.com)
  date   12/6/2015
 */
/**
 * This is the main file, sets up the game and runs the playscreen loop.
 */
AssetLoader.load(function(){
	createjs.Ticker.setFPS(GraphicsConstants.FPS);
	AudioPlayer.init();
	Canvas.init("drawing", GraphicsConstants.LAYER_NUMBER);
	GameState.reset();
	FrameTimer.init(GraphicsConstants.FPS);
	
	PlayScreen.load("drawing");
	PlayScreen.render();
	createjs.Ticker.addEventListener("tick", function(){ PlayScreen.update(); });
});
