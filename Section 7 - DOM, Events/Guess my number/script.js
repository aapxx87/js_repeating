'use strict';

/*
console.log(document.querySelector('.message').textContent)
document.querySelector('.message').textContent = 'Correct number'
document.querySelector('.score').textContent = '44'
document.querySelector('.number').textContent = '30'
document.querySelector('.guess').value = 70
console.log(document.querySelector('.guess').value);
*/


let secretNumber = Math.trunc(Math.random() * 20) + 1

let score = 20
let highscore = 0



document.querySelector('.check').addEventListener('click', function () {

  const guess = Number(document.querySelector('.guess').value)

  // When there is no Input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!'

    // Whem player Wins
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber
    document.querySelector('.message').textContent = 'Correct Number!'
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'

    if (score > highscore) {
      highscore = score
      document.querySelector('.highscore').textContent = highscore
    }

    // When guess is too High
  } else if (guess > secretNumber) {

    if (score > 1) {
      document.querySelector('.message').textContent = 'To high!!'
      score--
      document.querySelector('.score').textContent = score
    } else {
      document.querySelector('.message').textContent = 'You loose!'
      document.querySelector('.score').textContent = 0
    }

    // When guess is too Low
  } else if (guess < secretNumber) {

    if (score > 1) {
      document.querySelector('.message').textContent = 'To Low!!'
      score--
      document.querySelector('.score').textContent = score
    } else {
      document.querySelector('.message').textContent = 'You loose!'
      document.querySelector('.score').textContent = 0
    }

  }

})




document.querySelector('.again').addEventListener('click', function () {
  score = 20
  secretNumber = Math.trunc(Math.random() * 20) + 1
  document.querySelector('.message').textContent = 'Start guessing...'
  document.querySelector('.score').textContent = 20
  document.querySelector('.number').textContent = '?'
  document.querySelector('.guess').value = ''

  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.number').style.width = '15rem'
})



