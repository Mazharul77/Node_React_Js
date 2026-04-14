
const cursor_colors = [
    '#e609b2',
    '#6B1D0F',
    '#FE50F0',
    'hsl(120, 100%, 50%)',
    '#ff003E',
    '#f07212',
    '#CCBAF0',
    '#0af4f8',
    '#f1f104',
    '#0B00F0',
    '#0ad8f3',
];

const cursor_pointer = document.querySelector('.cursor');

document.addEventListener('mousemove', function (event) {
    cursorMoving(event.pageX, event.pageY);
});
 
const cursorMoving = function (pageX, pageY) {
    let randomColors = cursor_colors[Math.floor(Math.random() * cursor_colors.length)]

    // but don't give priority over nav link and buttons also so that the nave items and buttons are clickable

    
    cursor_pointer.style.left = pageX + 'px';
    cursor_pointer.style.top = pageY + 'px';

    cursor_pointer.style.backgroundColor = randomColors;
}