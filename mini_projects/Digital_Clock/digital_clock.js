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