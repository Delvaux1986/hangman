// VARIABLE BUTTON
let start = document.getElementById('start');
let stoplight = document.getElementById('wordSpotLight');
let hangmanPic = document.getElementById('penduImg');

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
    let buttonsHTML = "abcdefghijklmnopqrstuvwxyz-".split('').map(letter =>
        `
           <button class="btn btn-lg btn-dark m-2"
                    id="`+letter+`" 
                    onclick=testLetter("` + letter + `")
                    >
                    ` + letter +`


            </button>
        `).join('');

        document.getElementById('keyboard').innerHTML =  buttonsHTML;
}
// transform the word on _
function guessWord(){
    wordStatus = answer.split('').map(letter => ( guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

    document.getElementById("wordSpotLight").innerHTML = wordStatus;
}
// Test The letterchoice
function testLetter(letterChoice){
    guessed.indexOf(letterChoice) === -1 ? guessed.push(letterChoice) : null ;
    document.getElementById(letterChoice).setAttribute('disabled', true );
    
    if(answer.indexOf(letterChoice) >= 0){
        guessWord();
        checkIfWin();
    }else if(answer.indexOf(letterChoice) === -1){
        refreshMistakes();
        refreshIMGMistakes();
    }
}
//function RESET

function reset(){
    answer = "";
    maxWrong = 6;
    mistakes = 0;
    guessed = [];
    wordStatus = null ;
    randomWord();
    generateButtons();
    guessWord();
    refreshMistakes();
    hangmanPic.src = "./assets/img/0.jpg";
}
// refresh maxWrong

function refreshMistakes(){
    mistakes++;
    document.getElementById('mistakes').innerHTML = mistakes;
    if(mistakes === 6){
        document.getElementById('keyboard').innerHTML = "YOU LOOSEEEEE";
        

    }
    

}
// REFRESH PIC 
function refreshIMGMistakes(){
    hangmanPic.src = "./assets/img/"+mistakes+".jpg";
}
// Check if WIN
function checkIfWin(){
    if(wordStatus === answer){
        document.getElementById('keyboard').innerHTML = "YOU WINNNNN GGG ";
    }
}


document.getElementById('maxWrong').innerHTML = maxWrong;
// EXEC FUNCTION 
//testLetter();
randomWord();
generateButtons();
guessWord();
