/**
  author Olin Gallet (olindgallet@olingallet.com)
  date   12/3/2015
 */

/**
 * The LoadingShield represents the shield growing around the player.  When it comes full
 * circle, the player wins.
 * @class LoadingShield
 * @constructor
 */
function LoadingShield(){
	this.radians = 0;
}

LoadingShield.prototype = {
	/**
	 * Increases the shield by a set amount.
	 * @method increase
	 */
	increase: function(){
		if (this.radians <= Math.PI * 2){
			this.radians = this.radians + (Math.PI / 256.00);
		}
	},
	
	/**
	 * States if the loading shield is complete.
	 * @method isComplete
	 */
	 isComplete: function(){
		 return this.radians >= (Math.PI * 2);
	 }
}