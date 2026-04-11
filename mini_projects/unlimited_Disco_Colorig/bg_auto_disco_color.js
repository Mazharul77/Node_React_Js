

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