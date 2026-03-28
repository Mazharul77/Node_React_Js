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