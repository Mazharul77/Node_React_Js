/*
Hoisting: calling function before function definition
except assinging the function to a variable since it's not faciliting to hoisting
*/

// Hoisting Method working 1: due to function is not assigning to any variable
console.log("Total Prices:", addNumbers(45, 89));
function addNumbers(price1 , price2){
    return price1 + price2;
}

//Not working Hoisting Method2: Due to function assigning
// except the below: Error will show ---- can't access 'function_name' before initialization

// console.log("The Grand Total:", grandTotal(159, 753))
// const grandTotal = function (num1, num2) {
//     return num1 + num2
// }


// But function declaration will work after call : without hoisting after initialization 

const grandTotal = function (num1, num2) {
    return num1 + num2
}
console.log("The Grand Total: As normal function without hoisting:", grandTotal(159, 753))