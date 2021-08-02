'use strict';

let secretNumber = Math.trunc(Math.random() *20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function(message){

    document.querySelector('.message').textContent = message;
}
const setScoreText = function(text){
    document.querySelector('.score').textContent = text;
}
document.querySelector('.check').addEventListener
('click' 
 , function() {
     const guess = Number(document.querySelector('.guess').value);
     console.log(guess ,typeof guess);

     //When there is no input
     if(!guess){
        displayMessage('⛔ No Number!');

        //When player wins
     }else if(guess === secretNumber){
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        //When is number is different
     }else if(guess !== secretNumber){
        if(score > 1){
            displayMessage(guess>secretNumber ? '📈 Too High!' : '📉 Too Low!');
            score--;
            setScoreText(score);
         }else{
            displayMessage('🤯 You lost the game!');
            setScoreText(0);
         }
     };
});


document.querySelector('.again').addEventListener('click' , function(){
    secretNumber = Math.trunc(Math.random() *20) + 1;
    score = 20;
   document.querySelector('body').style.backgroundColor = '#222';
   document.querySelector('.number').style.width = '15rem';
   document.querySelector('.number').textContent = '?';
   setScoreText(20);
   displayMessage('start guessing...');
   document.querySelector('.guess').value = '';
})

