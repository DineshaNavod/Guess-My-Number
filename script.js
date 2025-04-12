'use strict';

// Generate Random Number
let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highscore = Number(localStorage.getItem('highscore')) || 0;

// Show the saved highscore on page load
document.querySelector('.highscore').textContent = highscore;

const changeText = message => {
  document.querySelector('.message').textContent = message;
};

// Check Button
document.querySelector('.check').addEventListener('click', () => {
  const guessNumber = Number(document.querySelector('.guess').value);

  if (!guessNumber) {
    changeText('🤓 No number!');
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      changeText('💥 You lost the game!');
    }
  } else if (secretNumber === guessNumber) {
    changeText('🎉 Correct Number!!');
    document.querySelector('body').style.backgroundImage =
      'url(./img/bg-hover.jpg)';
    document.querySelector('body').style.backgroundSize = 'cover';
    document.querySelector('body').style.backgroundPosition = 'center';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      localStorage.setItem('highscore', highscore);
      document.querySelector('.highscore').textContent = highscore;
    }
  } else {
    if (score > 1) {
      changeText(guessNumber > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      changeText('💥 You lost the game!');
    }
  }
});

// Again Button
document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;

  document.querySelector('.guess').value = '';
  changeText('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundImage = 'url(./img/bg.jpg)';
  document.querySelector('.number').style.width = '15rem';
});
