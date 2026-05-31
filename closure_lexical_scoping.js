/* Closure: 

   combination of function & it's references
   which provides access to outer function's scope from an ineer function
   during function creation:
*/

function outerScope() {
    let name = 'Mazharul Islam Bhuiyan';
    function innerScope() {
        let inside_inner = 19;
        console.log("Within inside the developer access of outer global scoper: ", name);
    }
    innerScope();
    // console.log("From outer is inner data accessinle?:", inside_inner); // ReferenceError: inside_inner is not defined
}
outerScope();

// console.log("Is accessible from ouside of scope of outer scope's ?: ", name); // ReferenceError: name is not defined


/** Closure and Lexical Scoping practical Example: */
function createClickTracker(buttonId, customName, bgColor) {
    let clickCounter = 0;
    const buttonElement = document.getElementById(buttonId);
    const outputElement = document.getElementById('output');

    buttonElement.addEventListener('click', function () {
        clickCounter++;

        outputElement.innerText = `${customName} has been clicked ${clickCounter} times.`;
        // outputElement.style.backgroundColor = bgColor;
        // to override inline css from js we have to use setProperty('attribute', 'value', 'important/priority') method to be changed as expected
        outputElement.style.setProperty('background-color', bgColor, 'important');
        outputElement.style.color = 'white';
    })
}

createClickTracker('btn-ExploreNew', 'Explore New', '#ff4757');
createClickTracker('btn-WatchNow', 'Watch Now', '#2ed573');
createClickTracker('btn-DownloadNow', 'Download Now', '#1e90ff');
