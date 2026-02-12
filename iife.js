/* ................. Let's Try with IIFE functions .............  */
(()=> {
    console.log('============= The following is the IIFE ==================')
})();

//Immediately Invoked Function Expression(IIFE): with function naming
(function iifePlay(passedIife) {
    console.log(`Just IIFE is written with function naming: ${passedIife}`)
}) ('I am IIFE value.');

// Two iife function defining altogether mechanism: without naming[with arrow function]
((price)=>{
    console.log(`My price value is: ${price} without function naming !`)
})(99);