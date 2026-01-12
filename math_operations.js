dynamic_year = 2026
console.log(`Node at Reaction to JS in ${dynamic_year}`)

const band_score_standanrd = 9
/* Diving into math library and linked operations */
console.log(`The Square Root of Band-${band_score_standanrd}:`, Math.sqrt(band_score_standanrd))

// [constructor(Number), toExponential, toFixed, toLocaleString, toPricision, toString, valueOf, Object]

const readline = require("readline")
console.log(`readline:${readline} and the type: ${typeof readline}`)

const rd_interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
// console.log("rd_interface",rd_interface)


console.log(`Band Score Standard:${band_score_standanrd} and Type is:${typeof band_score_standanrd}`)

rd_interface.question(`What's Expected Salary in ${dynamic_year}?:`, (input) => {
    const numEntered = Number(input)
    const taxPayAmount = numEntered * .30
    console.log("Ow! You Wanted:", numEntered.toString().length, "digit Salary: $", numEntered.toLocaleString("en-IN")); // counting convenience  as local format passed
    console.log("You need to Pay Tax of amount: $", taxPayAmount.toFixed(2))
    rd_interface.close();
})

// Number as object
// rd_interface.question("Type any age", (input) => {
//     let age = Number(input)
//     console.log("Entered Age:", age.toFixed())
//     rd_interface.close();

// });
// const earningExpectation = new Number(prompt("Enter Your Expected Earning digits in ${dynamic_year}"))
// console.log(`Expected Earning: ${earningExpectation}`)



