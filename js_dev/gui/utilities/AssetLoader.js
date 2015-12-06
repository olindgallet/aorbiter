/**
  author Olin Gallet (olindgallet@olingallet.com)
  date   12/6/2015
 */

/**
 * The AssetLoader loads up all assets through the preloader to ensure the game
 * runs smoothly.
 */
var AssetLoader = (function() {
	return {	
		/**
		 * Loads all assets.
		 * @param onComplete the callback to use once assets are loaded.
		 * @function load
		 */
		load: function(onComplete){
			var preloader = new createjs.LoadQueue();
			preloader.addEventListener("complete", onComplete);
			preloader.loadFile(AudioConstants.sfxfiles.PLAYER_SHOOT);
			preloader.loadFile(AudioConstants.sfxfiles.ENEMY_HIT);
			preloader.loadFile(AudioConstants.sfxfiles.PLAYER_HIT);
		}
    };
})();