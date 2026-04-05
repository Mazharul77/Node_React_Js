
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log('The Random Number is:', randomNumber);

const form = document.querySelector('#guess_form');
const guessInput = document.querySelector('#guess_input_field');
const submitGuessBtn = document.querySelector('#submitGuess');

const inputSeverity = document.querySelector('.low_high_input');

let pastGuesses = [];
let remainingGuesses = 10;
let playGame = true;

if (playGame) {
    submitGuessBtn.addEventListener('click', function (e) {
        e.preventDefault();
        let userGuess = parseInt(guessInput.value);
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            alert('Please Enter a Valid Number Between 1 and 100');
            return;
        }

        else {
            pastGuesses.push(userGuess);
            if (remainingGuesses < 1) {
                endGame(false);
            }
            remainingGuesses--;
            document.querySelector('.guess_list').textContent = pastGuesses.join(', ');
            document.querySelector('.remainGuess').textContent = remainingGuesses;

            if (userGuess === randomNumber) {
                // alert(`Congratulations! Your Guess ${userGuess} is Correct.\n You Win!`);
                let attemptSaver = true;
                endGame(attemptSaver);
            }
            else {
                if (userGuess < randomNumber) {
                    inputSeverity.textContent = 'Your Guess is Too Low!';
                    inputSeverity.classList.remove('high');
                    inputSeverity.classList.add('low');
                }
                else {
                    inputSeverity.textContent = 'Your Guess is Too High!';
                    inputSeverity.classList.remove('low');
                    inputSeverity.classList.add('high');
                }
            }
            guessInput.value = '';
        }
    });
}

function endGame(attemptSaver) {
    playGame = false;

    if (!attemptSaver) {
        alert(`Game Over! You've Used All Your Guesses.\nThe Correct Number Was: ${randomNumber}`);
    }
    else {
        alert(`Congratulations!
             You've Guessed the right Number in ${10 - remainingGuesses} Attempts!\n You Win!`);
    }
    submitGuessBtn.setAttribute('disabled', 'disabled');
    inputSeverity.textContent = '';
    const startBtn = document.createElement('button');
    startBtn.textContent = 'Start New Game';
    startBtn.classList.add('btn', 'btn-outline-primary', 'mt-3');
    startBtn.setAttribute('id', 'gameStarter');

    document.querySelector('#result_section').appendChild(startBtn);
    startNewGame(startBtn);

    userGuess = '';
    return;
}

function startNewGame(playGameBtn) {

    playGameBtn.addEventListener('click', function () {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        console.log('The New Random Number is:', randomNumber);
        pastGuesses = [];
        remainingGuesses = 10;
        document.querySelector('.guess_list').textContent = '';
        document.querySelector('.remainGuess').textContent = remainingGuesses;
        inputSeverity.textContent = '';
        submitGuessBtn.removeAttribute('disabled');
        playGameBtn.remove();
        playGame = true;
    });
}