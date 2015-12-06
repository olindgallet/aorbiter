/**
  author Olin Gallet (olindgallet@olingallet.com)
  date   12/6/2015
 */

/**
 * The ScoreKeeper keeps track of the player and enemy score.
 * @class ScoreKeeper
 * @constructor
 */
function ScoreKeeper(){
	this.playerScore  = 0;
	this.enemyScore = 0;
	this.finalPlayerScore  = 0;
	this.finalEnemyScore = 0;
}

ScoreKeeper.prototype = {
	/**
	 * Increases enemy score.
	 */
	increaseEnemyScore: function(){
		this.enemyScore = this.enemyScore + 1;
	}, 
	/**
	 * Increases the player score.
	 */
	increasePlayerScore: function(){
		this.playerScore = this.playerScore + 1;
	}
}