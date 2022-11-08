'use strict';
//selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore, scores, activePlayer, gameOn;
//Starting Conditions
const init = function () {
  gameOn = true;

  currentScore = 0;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  activePlayer = 0;
  scores = [0, 0];
  // using arrays to hold both player's total score

  diceEl.classList.add('hidden');

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active'); // toogle removes if the class isthere and adds if the class is not there
};

// Rollling the dice functionality
btnRoll.addEventListener('click', function () {
  if (gameOn) {
    // 1. Generate a dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check if it is 1
    if (dice !== 1) {
      // add to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switext player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (gameOn) {
    // 1. add currrent score to the active player's total score
    scores[activePlayer] += currentScore;
    // i.e.  scores[1] = scores[1] + currentscore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. check if the player's score is >= 100
    // if so, the player wins the game
    if (scores[activePlayer] >= 100) {
      gameOn = false;

      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
      // 3. Switch to the next player
    }
  }
});

btnNew.addEventListener('click', init);
