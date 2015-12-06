/**
  author Olin Gallet (olindgallet@olingallet.com)
  date   12/6/2015
 */

 /**
  * The AudioPlayer loads up audio files and readies their id for use.
  */
var AudioPlayer = (function() {
	return {	
		/**
		 * Initializes the audio player.
		 */
		init: function(){
			createjs.Sound.registerSound(AudioConstants.sfxfiles.PLAYER_SHOOT, AudioConstants.sfxids.PLAYER_SHOOT);
			createjs.Sound.registerSound(AudioConstants.sfxfiles.ENEMY_HIT, AudioConstants.sfxids.ENEMY_HIT);
			createjs.Sound.registerSound(AudioConstants.sfxfiles.PLAYER_HIT, AudioConstants.sfxids.PLAYER_HIT);
		}
	}
})();