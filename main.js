//this will contain the logic of the app, game ends when player guesses the word or runs out of guesses

//starter code
//require the objects/exports you will use

var inquirer = require('inquirer');
var Word = require('./word.js');
var Game = require('./game.js');
var Letter = require('./letter.js');

// var done = false;

function start() {
inquirer.prompt([{
            type: 'list',
            message: "Let's play some hangman. The theme is horror movie characters. Would you like to start?",
            name: 'response',
            choices: ['Yes','No']
            }]).then(function(answer) {
                if (answer.response == 'Yes') {
                    game.startGame();
                } else {
                console.log('Maybe next time!');
                }
            });
};

game = {
    wordBank: Game.game.wordBank,
    wins: 0,
    losses: 0,
    wrongGuesses: [],
    remainingGuesses: 10,
    currentWord: null,
    startGame: function(word) {
        this.reset();


        this.currentWord = new Word(this.wordBank[Math.floor(Math.random() * this.wordBank.length)]);
        this.currentWord.getLets();
        this.currentWord.createWord();
        this.promptUser();


    },
    reset: function() {
        this.remainingGuesses = 10;
    },
    promptUser: function() {
        inquirer.prompt([
        {
            type: "input",
            name: "guessLetter",
            message: "Guess a letter" 
        }
    ]).then(function(result) {
            // console.log(result.guessLetter);
            console.log("Your guess: " + result.guessLetter);


            var lettersInWord = this.currentWord.letterPresent(result.guessLetter);


            if (lettersInWord == 1) {
                console.log("That's right!");
                test = 0;
                if (this.present == true) {
                    console.log('You Won!!!');
                    wins++;
                    console.log("Wins: " + wins);
                    this.present = false;
                    console.log("Wrong Guesses: " + wrongGuesses.toString());
                    game.startGame();
                }
            } else {
                console.log("That's wrong!");
                this.remainingGuesses--;
                wrongGuesses.push(guess);
                console.log("Wrong Guesses: " + wrongGuesses.toString());
            }
            console.log('Guesses Left: ', this.remainingGuesses);
            console.log(this.currentWord.createWord());
            if (this.remainingGuesses > 0){
                this.promptUser();
            } else if (this.remainingGuesses === 0) {
                console.log('The word was', this.currentWord.word);
                console.log("Try again");
                this.present = false;
                game.startGame();
            } else {
                console.log(this.currentWord.createWord());
            }
        });
    }



};
start();

