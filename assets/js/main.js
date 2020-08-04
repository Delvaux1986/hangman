// VARIABLES CANVAS
let can = document.getElementById('can');
let ctx = can.getContext ;
// VARIABLE BUTTON
let start = document.getElementById('start');
let reset = document.getElementById('reset');
// VAR INIT
let answer = "";
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null ;


// function RANDOM WORD 

function randomWord(){
    answer = wordsList[Math.floor(Math.random()* wordsList.length)];
}

//Function GENERATE BUTTONS OF KEYWBOARD

function generateButtons(){
    let buttonsHTML = "abcdefghijklmnopqrstuvwxyz".split('').map(letter =>
        `
           <button class="btn btn-lg btn-primary m-2"
                    id="`+letter+`" 
                    onclick="testLetter("`+ letter +`")
                    >
                    ` + letter +`


            </button>
        `).join('');

        document.getElementById('keyboard').innerHTML =  buttonsHTML;
}

function guessWord(){
    wordStatus = answer.split('').map(letter => ( guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

    document.getElementById("wordSpotLight").innerHTML = wordStatus;
}

function testLetter(letterChoice){
    guessed.indexOf(letterChoice) === -1 ? guessed.push(letterChoice) : null ;
}

// INNER ALONE
document.getElementById('maxWrong').innerHTML = maxWrong;



// EXEC FUNCTION 

randomWord();
generateButtons();
guessWord();