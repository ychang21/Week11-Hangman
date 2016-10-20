//constructor file: contain all of the methods which will check the letters guessed versus the random word selected

//starter code
// require your letter objects

var Letter = require('./letter.js');
var numLetters = 0;
var Word = function(word) {
    this.word = word;
    this.letters = [];
    this.present = false;

    this.getLets = function() {
        for (var i = 0; i < this.word.length; i++) {
            this.letters.push(new Letter(this.word[i]));
        }
    };


    this.wordComplete = function() {
        //not sure how to write the code for this but this is the pseudo-code
        // if(word is complete) {
        //     this.present = true;
        // }

        // return this.present;
		for (var i = 0; this.letters.length < 0; i++) {
			if (this.letters[i].appear) {
				numLetters++;
			}
		}
		if (numLetters == this.letters.length) {
			this.present = true;
		}
		return this.present;
    };

    this.letterPresent = function(guess) {
        //testing if letter is found in random word
        //didn't like whattoreturn in starter code so replaced
        var test = 0;
        for (var i = 0; i < this.letters.length; i++) {
            if (this.letters[i].character === guess) {
                this.letters[i].appear = true;
                test++;
            }
        }
        return test;
    };

    this.createWord = function() {
        var string = "";

        for (var i = 0; i < this.letters.length; i++) {
            string = string + this.letters[i].letterRender();
        }
        //to show that the letters array is working
        // console.log(JSON.stringify(this.letters, null, 4));
        return console.log(string);
    };
}

module.exports = Word;

