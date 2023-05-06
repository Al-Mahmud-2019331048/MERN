'use strict';

// console.log(document.querySelector('.message').textContent); 
// document.querySelector('.message').textContent = 'Correct Number!'
// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=20;
// document.querySelector('.guess').value=23;

let secrectnumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;

const displayMessage = function(message){
    document.querySelector('.message').textContent=message;
}

// event listener
document.querySelector('.check').addEventListener('click', function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    // wrong guess 
    if(!guess){
        // refractoring repetetive code 
        //  document.querySelector('.message').textContent='⛔No number!';
         displayMessage('⛔No number!');
    }
    // when player wins 
    else if(guess==secrectnumber){
        displayMessage('🎉 Correct number');
        document.querySelector('.number').textContent=secrectnumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width='30rem';
        if(score>highscore) {
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
    }
    else if(guess!=secrectnumber){
        if(score>1){
            guess>secrectnumber? displayMessage('📈Too High') : displayMessage('📉Too Low');
            score--;
            document.querySelector('.score').textContent=score;
        }
        else{
            displayMessage('😔You lost the game');
            document.querySelector('.score').textContent=0;
        }
    }
    // too high 
    // too low 
});

document.querySelector('.again').addEventListener('click', function(){
    score=20;
    secrectnumber=Math.trunc(Math.random()*20)+1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem'; 
});

