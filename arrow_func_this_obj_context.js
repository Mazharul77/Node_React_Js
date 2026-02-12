// Arrow function and this object context

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