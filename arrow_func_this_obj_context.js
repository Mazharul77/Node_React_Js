/* ...... Arrow function : implicitly return a value without using the return keyword ......... 
It is a shorter syntax for writing function in js.
 It is also known as a lamda function.
  It is introduced in ES6.
   It is a anonymous function.
    It does not have its own this object context.
     It is not suitable for methods in objects.
      It is not suitable for constructors.
       It is not suitable for event handlers.
        It is not suitable for callback functions.
            It is not suitable for functions that need to access the this object context.
*/


const addNumbers = (n1, n2) => (n1 + n2);
console.log("The summation result:", addNumbers(25, 35)); // 60

// implicit return value: if the function body contains only one expression, we can omit the curly braces and the return keyword. The value of the expression will be returned automatically.
const multiplyNumbers = (n1, n2) => n1 * n2;
console.log("The multiplication result: ",multiplyNumbers(5, 10)); // 50

// explicit return value: if the function body contains more than one expression, we need to use curly braces and the return keyword to return a value.
const divideNumbers = (n1, n2) => {
    if (n2 === 0) {
        return 'Cannot divide by zero';
    }
    return n1 / n2;
}
console.log("The division result:", divideNumbers(10, 2)); // 5
// console.log(divideNumbers(10, 0)); // Cannot divide by zero



/*  this within object context:

 this object context: in JavaScript function, the this keyword refers to
  the object that is currently executing the code.
  In a regular function, the this keyword refers
  to the object that is calling the function.
  However, in an arrow function, the this keyword does not refer to the object that is calling the function, but instead refers to the global object (window in browser or global in Node.js).
*/

const person = {
    name: 'Mazharul Islam Bhuiyan',
    age: 27,
    greetings: function () {
        console.log(`The name of the person is: ${this.name} and the age is ${this.age}`);
    }
}
person.greetings(); // The name of the person is: Mazharul Islam Bhuiyan and the age is 27


// // In arrow function, this object context is not available. It will refer to the global object (window in browser or global in Node.js)
// const person2 = {
//     name: 'John Doe',
//     age: 30,
//     greetings: () => {
//         console.log(`The name of the person is: ${this.name} and the age is ${this.age}`);
//     }
// }




// person2.greetings(); // The name of the person is: undefined and the age is undefined

// // To access the this object context in an arrow function, we can use a regular function instead of an arrow function   
// const person3 = {
//     name: 'Jane Doe',
//     age: 25,
//     greetings: function () {
//         console.log(`The name of the person is: ${this.name} and the age is ${this.age}`);
//     }
// }

// person3.greetings(); // The name of the person is: Jane Doe and the age is 25