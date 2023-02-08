'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0')
const score1El = document.getElementById('score--1')
const current0El = document.querySelector('#current--0')
const current1El = document.querySelector('#current--1')

const diceEl = document.querySelector('.dice')


const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')


score0El.textContent = 0
score1El.textContent = 0
diceEl.classList.add('hidden')

const scores = [0, 0]
let currentScore = 0
let activePlayer = 0



// Rolling dice functionality

btnRoll.addEventListener('click', function () {

  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6 + 1)


  // 2. Display dice
  diceEl.src = `dice-${dice}.png`
  diceEl.classList.remove('hidden')



  // 3. Check for rolled 1
  if (dice !== 1) {
    // add dice to current score
    currentScore += dice
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore

    if (currentScore + scores[activePlayer] > 30) {
      console.log('you potentially win');
      // btnRoll.disabled = true
      // btnHold.disabled = true
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
      btnRoll.classList.add('hidden')
      btnHold.classList.add('hidden')
      diceEl.classList.add('hidden')
    }



  } else {
    // Switch to next player
    currentScore = 0
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore

    // document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    activePlayer = activePlayer === 0 ? 1 : 0
    // document.querySelector(`.player--${activePlayer}`).classList.add('player--active')

    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')

    diceEl.classList.add('hidden')

  }

})


// Hold the current score

btnHold.addEventListener('click', function () {

  scores[activePlayer] = scores[activePlayer] + currentScore
  document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer]

  // if (scores[activePlayer] > 10) {
  //   console.log('you win');
  //   btnRoll.disabled = true
  //   btnHold.disabled = true
  // }

  currentScore = 0
  document.querySelector(`#current--${activePlayer}`).textContent = currentScore
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
  activePlayer = activePlayer === 0 ? 1 : 0
  document.querySelector(`.player--${activePlayer}`).classList.add('player--active')


  diceEl.classList.add('hidden')


})


// New game

btnNew.addEventListener('click', function () {

  document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner')

  btnRoll.classList.remove('hidden')
  btnHold.classList.remove('hidden')
  diceEl.classList.remove('hidden')

  scores[0] = 0
  scores[1] = 0

  document.querySelector(`#score--0`).textContent = scores[0]
  document.querySelector(`#score--1`).textContent = scores[1]


  currentScore = 0
  document.querySelector(`#current--${activePlayer}`).textContent = currentScore


  document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
  activePlayer = 0
  document.querySelector(`.player--${activePlayer}`).classList.add('player--active')

  diceEl.classList.add('hidden')


})