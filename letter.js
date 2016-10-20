//constructor file: control whether or not a letter appears as a "_" or as itself on-screen.
//starter code
var Letter = function(ltr) {

	this.character = ltr;

	this.appear = false;
	this.letterRender = function() {
    //to account for spaces
    if (this.character == ' ') {
      return '  ';
    } 
    //if letter not present it should appear as _
    if(this.appear == false) {
      return '_ ';
    } else {
      return this.character;
    }
	};
};

module.exports = Letter;