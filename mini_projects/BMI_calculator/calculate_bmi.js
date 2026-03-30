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
