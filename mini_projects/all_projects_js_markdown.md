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