/**
  author Olin Gallet (olindgallet@olingallet.com)
  date   12/6/2015
 */
/**
 * AudioConstants holds the locations of the sound files and the ids to use
 * to play those files.
 */
var AudioConstants = (function() {
	return {	
		sfxfiles: {
			PLAYER_SHOOT: "audio/playscreen/player/shoot.ogg",
			ENEMY_HIT: "audio/playscreen/player/enemyHit.ogg",
			PLAYER_HIT: "audio/playscreen/player/playerHit.ogg"
		},
		
		sfxids: {
			PLAYER_SHOOT: "playerShoot",
			ENEMY_HIT: "enemyHit",
			PLAYER_HIT: "playerHit"
		}
	}
})();