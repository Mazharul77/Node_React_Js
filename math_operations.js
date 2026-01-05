dynamic_year = 2026
console.log(`Node at Reaction to JS in ${dynamic_year}`)
// [constructor(Number), toExponential, toFixed, toLocaleString, toPricision, toString, valueOf, Object]

const readline = require("readline")
console.log(`readline:${readline} and the type: ${typeof readline}`)

const rd_interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
// console.log("rd_interface",rd_interface)


const band_score_standanrd = 9
console.log(`Band Score Standard:${band_score_standanrd} and Type is:${typeof band_score_standanrd}`)

rd_interface.question(`What's Expected Salary in ${dynamic_year}?:`, (input) => {
    const numEntered = Number(input)
    console.log("Ow! You Wanted:", numEntered.toLocaleString("en-IN")) // counting convenience  as local format passed
    rd_interface.close();
})

// Number as object
rd_interface.question("Type a number", (input) => {
    let age = Number(input)
});
// const earningExpectation = new Number(prompt("Enter Your Expected Earning digits in ${dynamic_year}"))
// console.log(`Expected Earning: ${earningExpectation}`)