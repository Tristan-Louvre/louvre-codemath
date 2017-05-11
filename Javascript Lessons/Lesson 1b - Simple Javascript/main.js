var randomNumber = Math.floor(Math.random() * 100) + 1

var guesses = document.querySelector('.guesses')
var lastResult = document.querySelector('.lastResult')
var lowOrHi = document.querySelector('.lowOrHi')

var guessField = document.querySelector('.guessField')
var guessSubmit = document.querySelector('.guessSubmit')

var guessCount = 1
var resetButton

function checkGuess() {
    var userGuess = Number(guessField.value)
    if (guessCount === 1){
        guesses.textContent = 'Previous guesses: '
    }
    guesses.textContent += userGuess + ' '

    if (userGuess === randomNumber){
        lastResult.textContent = 'Congratulation! You got it right!'
        lastResult.style.backgroundColor = 'green'
        lowOrHi.textContent = ''
        setGameOver()
    } else if (guessCount ===10){
        lastResult.textContent = '!!!GAME OVER!!!'
        setGameOver()
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber) {
            lowOrHi.textContent = 'Last guess was too low!';
        } else if(userGuess > randomNumber) {
            lowOrHi.textContent = 'Last guess was too high!';
        }
    }

    guessCount++
    guessField.value = ''
    guessCount.focus()
}

guessSubmit.addEventListener('click', checkGuess)

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

