# Mark Down: Related to Projects - DOM

## Some Attractive Projects in Js: Developed by Myself (Mazharul Islam Bhuiyan)
[Click here](https://stackblitz.com/edit/stackblitz-starters-qjnqcf5c?file=index.html)

## Theme Switcher Gaming in Js:

```javascript
console.log("Bhuiyan's Js Gaming/Fun!")

const buttons = document.querySelectorAll('.color-button');
const body = document.querySelector("body");

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        let target_color_id = e.target.id;
        let clicked_color_code = e.target.id;

        // set static code inside condition or get the color code from the clicked button's id
        if (target_color_id === 'grey') {
            body.style.backgroundColor = clicked_color_code;
        }
        else if (target_color_id === 'white') {
            body.style.backgroundColor = clicked_color_code;
        }
        
        else if (target_color_id === 'blue') {
            body.style.backgroundColor = clicked_color_code;
        }
            
        else if (target_color_id === 'yellow') {
            body.style.backgroundColor = clicked_color_code;
        }

        // see a 5s time notification message when a specific colorclick is made
        const message = document.createElement('div');
        message.textContent = `You have clicked the ${e.target.id} button!`;
        message.style.position = 'fixed';
        message.style.top = '10px';
        message.style.right = '10px';
        message.style.backgroundColor = 'rgba(0,0,0,0.7)';
        message.style.color = 'white';
        message.style.padding = '10px';
        message.style.borderRadius = '5px';
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.remove();
        }, 5000);

        // see a pop up alert when the color is changed
        // alert(`Background color changed to ${e.target.id}`);
        
    });
});
 ```

## BMI - Calculator Scripts:
```javascript

const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const results = document.querySelector('#results');

    const weight = parseInt(document.querySelector('#weight').value);
    const height = parseInt(document.querySelector('#height').value);

    const userText = document.getElementById('userText');

    if ((weight === '' || weight < 0 || isNaN(weight))
        && (height === '' || height < 0 || isNaN(height))) {

        userText.innerHTML = `<h4> You need to enter both valid Weight & Height. </h4>`;
        userText.style.color = 'white';
        results.innerHTML = '';

    }

    else if ((weight >= 0) && (height === '' || height < 0 || isNaN(height))) {
        userText.innerHTML = `You need to enter a valid height instead of: ${height}!`;

        document.querySelector('#height').value = '';
        document.querySelector('#weight').value = '';

        results.innerHTML = `<h4 class='text-center bg-danger text-white p-2 m-2'> .... 😂 Your System is Hacked 😂 .... </h4>`;
    }
    else {
        if ((weight === '' || weight < 0 || isNaN(weight)) && (height > 0)) {
            userText.innerHTML = 'Weight Amount must be a valid number!';
            results.innerHTML = `<h4 class='text-center bg-danger text-white p-2 m-2'> .... 😂 Your System is Hacked 😂 .... </h4>`;
            document.querySelector('#weight').value = '';
            document.querySelector('#height').value = '';
        }
        else {
            if (height > 0) {
                const bmiValue = (weight / ((height * height) / 10000)).toFixed(3);
                results.innerHTML = `<h4 class='text-center bg-success text-white p-2 mx-2 mb-0 mt-2'>
                                        Your Body Mass Index: ${bmiValue}
                                    </h4>`;
                let userStatus = document.createElement('p');
                userStatus.className = 'text-center bg-success p-2 mx-2 mt-0';
                // userStatus.style.display = 'inline-block';
                if (bmiValue < 18.6) {
                    userStatus.innerText = 'Your are Underweight!';
                    userStatus.style.color = 'yellow';
                    userStatus.style.fontSize = '18px';
                    results.appendChild(userStatus);
                }
                else if (18.6 <= bmiValue && bmiValue <= 24.9) {

                    userStatus.innerText = 'Your are Normal';
                    userStatus.style.color = 'white';
                    userStatus.style.fontSize = '18px';
                    results.appendChild(userStatus);
                }
                else {
                    userStatus.className = 'text-center  bg-secondary p-2 mx-2 mt-0'
                    userStatus.innerText = 'Your are Overweight!';
                    userStatus.style.color = 'red';
                    // userStatus.style.backgroundColor = '#00fffff7 !important';
                    userStatus.style.fontSize = '20px';
                    results.appendChild(userStatus);

                    userText.innerHTML = '';
                }
            }
            else {
                userText.innerHTML = `Your Hieght Value must be greater than 0.`;
                results.innerHTML = '';
            }
        }
    }


    // results.innerHTML = 'Calculation is Initiated!';
})

```

## Digital Clock: Project 3:

```javascript

const clock_area = document.querySelector('#view_clock');

clock_area.style.backgroundColor = 'cyan';
clock_area.style.width = '200px';
clock_area.style.height = '200px';
clock_area.style.display = 'flex';
clock_area.style.borderRadius = '20%';
clock_area.style.justifyContent = 'center';
clock_area.style.alignItems = 'center';
clock_area.style.fontSize = '20px';
clock_area.style.fontWeight = 'bold';
clock_area.style.margin = '20px auto';


const timeText = document.createElement('h4');

/*
    manual static time show:
*/

// timeText.innerHTML = `The Time is: ${new Date().toLocaleString()}`;
// timeText.innerHTML = `The Time is: ${new Date().toLocaleTimeString()}`;

// or

// let date = new Date();
// let time = date.toLocaleTimeString();
// timeText.innerHTML = `${time}`;
// clock_area.appendChild(timeText);

/*
    automated dynamice Digital Clock - time show    
*/
// now at speciic time period wise  time shoew:
setInterval(function () {
    let date = new Date();
    let time = date.toLocaleTimeString();
    timeText.innerHTML = `${date.toLocaleDateString()} <br/>${time}`;
    clock_area.appendChild(timeText);

 }, 1000); 

```

## Guessing Games: Pro and Basice Levels: Project 4

```javascript
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

```

## KeyBoard Key Events with key names and Ascii values : Project 5
```javascript

key_area = document.getElementById("key_display");

window.addEventListener("keydown", (event) => {
    key_area.innerHTML = `
    <div class="container key_tab_area">
        <table>
        <tr>
            <th>Key (key)</th>
            <th class="deprecated">ASCII Value (.keyCode): Deprecated</th>
            <th class="latest">ASCII Value (.key.charCodeAt(0)): Latest</th>
            <th>Key Code Description (code)</th>
        </tr>

        <tr>
            <td> ${event.key === " " ? "Space" : event.key} </td>
            <td class="deprecated"> ${event.keyCode} </td>
            <td class="latest"> ${event.key.charCodeAt(0)} </td>
            <td> ${event.code} </td>

        </tr>
        </table>
</div>
`;   
})

```

## Automated Disco Colors Unlimited : Project 6
```javascript



/*
 Random Backgroung color
  Generating with
   setInterval and clearInterval
    functions
*/
const starter = document.querySelector('#startChanger');
const stopper = document.querySelector('#stopChanging');

const randomColoring = function () {
    const hexCode = '0123456789ABCDEF'; // hexadecimal color code characters under 16 characters long
    let colorIndicator = '#';

    for (let colorCodeLen = 0; colorCodeLen < 6; colorCodeLen++) {
        colorIndicator += hexCode[Math.floor(Math.random() * 16)];
    }
    return colorIndicator;
}

// interval setting and clearing based on start and stop button click:
let intervalId;

const startChangeBgColor = function () {
    if (!intervalId) {
        intervalId = setInterval(bgColorChanger, 1000);
    }
    function bgColorChanger() {
        document.body.style.backgroundColor = randomColoring();
    }
};

// stoping the color change by clearing the interval and setting the intervalId to null to allow restarting the color change when start button is clicked again.
const stopChangeBgColor = function () {
    clearInterval(intervalId);
    intervalId = null;
}

starter.addEventListener('click', startChangeBgColor);
stopper.addEventListener('click', stopChangeBgColor);

```