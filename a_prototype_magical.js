/* js prototype-behavior: behind the mechanism 

(Array, String, Number, Function, Boolean, Date) --> Object --> null

 -- where object allows to access property and methods up to parent to parent
 -- inheritance like behaviors

 Here, some new keywords and functions and it's prototype-behaviors(js default vehavior:
  -- that means it's finding thing parent to parent layer until null is found
  -- it allows object to access properties and methods along with 'this' keyword access for creating new functional object 
  -- moreover, class,inheritance are also accessed through this prototype
  )
   will be practiced especially in the console to understand:

*/

// function constructor
function calculation(num) {
  return num * 10;
}

// different type of fuction's property:
calculation.power = 10;
console.log("Calculation result: ", calculation(31)); // normal output: 310

// function being an object, it can have properties and methods like any other object:
console.log("Not a function but function's property set: ", calculation.power); // output: 10
console.log("Prototype of cusotm function: ", calculation.prototype); // output: object with constructor property and other properties and methods of function prototype


/* Deep dive into custom prototype design:

//  cusotm function as custom_object declare =>
//  property and method declare with 'this' keyword =>
//  bind prototype to custom_object =>
//  create new object with 'new' keyword and access properties and methods of custom_object through prototype-behavior of js
// see output in console with created new object and access properties and methods of custom_object through prototype-behavior of js

*/

//custom function as custom_object declare

console.log("========  \n \t Let's Build Custom Prototype(custom function->prototype property add->linked new object creation and call)  ========\n");
//step1.: custom function define
function userData(name, point) {
  this.name = name;
  this.point = point;
}

// step2.: bind prototype & property with custom function
userData.prototype.updatePoint = function () {
  this.point++;
  console.log(`Updated Point for ${this.name}: ${this.point}`);
}


userData.prototype.demonstrate = function () {
  console.log(`The name of the user: ${this.name} and the point is ${this.point}`);
}

// step3.: user object creation for that custom function 'with' new keyword
let studentUser = new userData("Mazharul", 3.97);
let employeeUser = new userData("Bhuiyan", 2023);
let vipUser = new userData("Mr. Islam", 777);

//step4.: accessing properties and methods of custom function through prototype-behavior of js:

studentUser.demonstrate(); // output: The name of the user: Mazharull and the point is 3.97
employeeUser.updatePoint(); // output: Updated Point for Bhuiyan: 2024





// 1. protype-behavior of Array, String, Number, Functin, Boolean, Date
// 2. prototype-behavior of object
// 3. prototype-behavior of class and inheritance

// 1. prototype-behavior of Array, String, Number, Function, Boolean, Date

// Array
let arr = [11, 22, 33];
console.log(`The length of the Array-arr: ${arr.length}`); // 3
// prototype-behavior of array allows to access length property and other array methods like push,pop,shift, unshift, map, filter, reduce, etc.
// prototype-behavior of array allows to access properties and methods up to parent to parent until null is found
console.log(arr.__proto__); // Array.prototype
console.log(arr.__proto__.__proto__); // object.prototype
console.log(arr.__proto__.__proto__.__proto__); // null

// String
let str = "Mazharul Islam Bhuiyan";
console.log(str.length); // 22

// prototype-behavior of string allows to access length property and other string methods like charAt, charCodeAt, concat, includes, indexOf, lastIndedOf, match, replace, search, slice, split, substr, substring, toLocaleLowerCase, toLocaleUpperCase, toLowerCase, toUpperCase, trim, etc.
console.log(str.__proto__); // String.prototype
console.log(str.__proto__.__proto__); // object.prototype
console.log(str.__proto__.__proto__.__proto__); // null

/**
 * Injecting prototype into global object: so that from all object(String, Array, Function)
   the injected prototype's property/method can be accessed since now object has gotten the superpower. 
 Let's see an exmaple : bind in default object and access from any object
 */

const custArray = ['Mazharul', 'Software Engineer', 2026, 'AI', 'Research'];
const marketBasket = {
  name: 'Bread & Milk',
  price: 250.0,
  quantity: 5,
  buy: function () {
    console.log(`Total Price of bought items: ${this.price * this.quantity} `);
  }
}


// bind prototype into default object:

Object.prototype.Greetings = function () {
  if (this.name) {
    console.log(`Welocme to our shop!\n Thanks for visiting and exploring ${this.name}.`);
  }
  else {
    console.log("Welocme!\n Thanks for visiting and exploring us");
  }
}

marketBasket.Greetings();

// NOW ACCESS DEFINED GRETTINGS RPOTOTYPE ACTION FROM ANY OBJECT:
// LET'S USE GREETINGS FORM OUR CUSTOM ARRAY:

custArray.Greetings();

// inheritance through prototype-behavior of js:

const user = {
  name: 'Mazharul Islam Bhuiyan', 
  className: 'Graduation',
};

const Teacher = {
  teach: function () {
    console.log("Teaching students with dedication and passion.");
  }
}

const TeachingSupport = {
  supportAvailable: true,
}

const TASupport = {
  assignmentName: 'Lab testing',
  assignDeadline: '',
  assistStudents: function () {
    console.log("Assisting students with their assignments and projects.");
  },

  // (deprecated)inheriting from TeacningSupport to access supportAvailable property & assistStudents method from TeachingSupport prototype-behavior of js:
  // __proto__: TeachingSupport
}

// (deprecated) alternative way to inherit from Teacher to access teach method from Teacher prototype-behavior in TeachingSupport:
TeachingSupport.__proto__ = Teacher;

/*
 Modern way to inherit from user object to access name and className properties
  from user prototype-behavior of js in Teacher and TeachingSupport:
*/
Object.setPrototypeOf(Teacher, user); // Teacher inherites from user: that means Teacher can access name and className propertes from user prototype-behavior and also teach method from Teacher prototype-behavior of js
Object.setPrototypeOf(TeachingSupport, TASupport); // TeachingSupport inherits from TAsupport: that means TeachingSupport can access assignmentName, assignDeadline, assistStudents method from TASupport prototype-behavior and also supportAvailable property from TeachingSupport prototype-behavior of js

console.log(Teacher.name); // output: undefined since name is defined in user object and Teacher inherits from user object through prototype-behavior of js
console.log(TeachingSupport.assignmentName); // output: Lab testing since assignmentName is defined in TASupport object and TeachingSupport inherits from TASupport object through prototype-behavior of js
console.log(TeachingSupport.supportAvailable); // output: true since supportAvailable is defined in TeachingSupport object and TeachingSupport inherits from TeachingSupport object through prototype-behavior of js

