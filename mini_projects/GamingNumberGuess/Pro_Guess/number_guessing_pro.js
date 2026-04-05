const randomNumber = parseInt(Math.random() * 100) + 1;
console.log(`Random Numbr: ${randomNumber}`);

let timer = document.querySelector('#show_timer');
let timeLeft = 45; // Set the timer for 45 seconds
timer.innerHTML = `<h2 class="text-danger"> Time Left: ${timeLeft} seconds </h2>`;

let timerInterval = setInterval(function () {
    timeLeft--;
    timer.innerHTML = `<h2 class="text-danger"> Time Left: ${timeLeft} seconds </h2>`;
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        timer.innerHTML = `<h1> Time's Up! </h1>`;
        endGame();
    }
}, 1000);


const userInput = document.querySelector('#guess_input_field');
const submit = document.querySelector('#submitGuess');

const result = document.querySelector('#result_section');

const pastGuesses = document.querySelector('.guess_list');
const remainGuessSection = document.querySelector('.remaingGuess');
const lowOrHigh = document.querySelector('.low_high_input');

const para = document.createElement('p');

let guessList = [];
let guessNo = 1;
let remainingGuesses = 10;

let playGame = true;

// Game event listener logic:
if (playGame) {
    submit.addEventListener('click', function (event) {
        event.preventDefault();
        const userGuess = parseInt(userInput.value);
        validateGuess(userGuess);
    });
}

// validate guess logic: number between 1 and 100, not empty, not string, not decimal, etc.
function validateGuess(userGuess) {
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100 || userGuess % 1 !== 0 || userGuess === '') {
        alert("Please Enter a Valid Number between 1 and 100 !");
    }
    else {
        guessList.push(userGuess);
        if (guessNo >= 10 || remainingGuesses <= 0) {
            manageGuess(userGuess);
            displayMessage(`Game Over!\n The correct Random Number was: ${randomNumber}.`);
            endGame();
        }
        else {
            manageGuess(userGuess);
            checkGuess(userGuess);
        }
    }
}


// check guess logic: if guess is correct, if guess is too high, if guess is too low, etc.
function checkGuess(userGuess) {
    if (userGuess === randomNumber) {
        displayMessage(`Congratulations!\n Your Guessed the correct number: ${randomNumber} in ${guessNo}th Attempt.`);
        timer.innerHTML = `<h1 class="text-success"> You Won! </h1>`;
        endGame();
    }
    else {
        if (userGuess < randomNumber) {
            displayMessage(`Your Guess is too Low! Try Again!`);
        }
        else {
            displayMessage(`Your Guess is too High! Try Again!`);
        }
    }
}

// clean input field logic: clear input field after each guess, etc.
function manageGuess(guess) {
    userInput.value = '';
    pastGuesses.innerHTML += `${guessNo > 1 ? ', ' : ''} ${guess}`;
    guessNo++;
    remainingGuesses--;
    remainGuessSection.innerHTML = ` ${remainingGuesses}`; 
}

// display message logic: display message to user based on guess result, remaining guesses, etc.
function displayMessage(message) {
    lowOrHigh.innerHTML = `<h4> ${message} </h4>`;
}

// end game logic: disable input field and submit button, display final message, etc.
function endGame() { 
    userInput.value = '';
    userInput.setAttribute('disabled', 'disabled');
    submit.setAttribute('disabled', 'disabled');
    para.classList.add('button', 'btn', 'btn-outline-warning', 'mt-1');
    para.setAttribute('id', 'newGameStarter');
    para.textContent = `Start New Game`; 
    
    result.appendChild(para);
    // timeLeft = 0; // Stop the timer
    startNewGame();
}

// start new game logic: reset variables, clear messages, enable input field and submit button, etc.
function startNewGame() {
    const newGameBtn = document.querySelector('#newGameStarter');
    newGameBtn.addEventListener('click', function () {

        location.reload(); // Reload the page to start a new game
        timeLeft = 45; // Reset the timer
        timer.innerHTML = `<h2 class="text-danger">Time Left: ${timeLeft} seconds </h2>`;
        timerInterval = setInterval(function () {
            timeLeft--;
            timer.innerHTML = `<h2 class="text-danger">Time Left: ${timeLeft} seconds </h2>`;
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                timer.innerHTML = `<h1 class="text-danger"> Time's Up! </h1>`;
                endGame();
            }
        }, 1000);


        guessList = [];
        guessNo = 1;
        remainingGuesses = 10;

        userInput.removeAttribute('disabled');
        submit.removeAttribute('disabled');
        pastGuesses.innerHTML = '';
        remainGuessSection.innerHTML = `${remainingGuesses}`;
        lowOrHigh.innerHTML = '';
        result.removeChild(para);
    })
}