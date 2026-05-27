
// Some built in JavaScript objects and prototypes
// Object, Array, String, Number, Boolean, Function, Date, RegExp, Error, etc.

const dataArray = ['Javascript', 2023, 'Python', 2019, 'Django', '2021', 'Laravel', 2022, 'CSS', 'SCSS', 'Bootstrap', 2019, 'C', 'C++', 'Java', 2017, 'Odoo', 2022, 'Docker', 'AWS/Kubernets', 'React JS/Node JS', ''];
console.log("The Skillset of the Soul: ", dataArray);
console.log("The Length of the Original Array: ", dataArray.length);
//at
console.log("The value 'at' index 7: ", dataArray.at(7));

// concat
const newSkills = ['AWS', 'Pandas', 'Numpy', 'Matplotlib', 'Scikit-learn', 'Seaborn', 'TensorFlow', 'Keras', 'PyTorch'];
const masterSkills = dataArray.concat(newSkills);
console.log("The All 'concat'enated Skills of the Soul: ", masterSkills);

//constructor demonstration explanation:
/*
 The constructor property returns a reference to the object constructor function that created the 
 insance object. It is a property of all objects in JavaScript and can be used to determine the type of an 
 object or to create new instances of the same type.
  For example, if you have an object created from a constructor function, you can use the constructor property to 
  create new instances of that object or to check the type of the object.
  Here's an example below:
*/
class EnchantedObject {
    constructor(name, power) {
        this.name = name;
        this.power = power;
    }

}
const magicWand = new EnchantedObject('Magical Wand', 'Spell Casting');
console.log("The Magical Object: ", magicWand);
console.log("The Constructor of the Magical Object: ", magicWand.constructor);

// The constructor property can also be used to create new instances of the same type:
const anotherMagicWand = new magicWand.constructor('Another Magical Wand', 'Enhanced Spell Casting');
console.log("Another Magical Object: ", anotherMagicWand);

// The constructor property can also be used to check the type of an object:
console.log("Is magicWand an instance of EnchantedObject? ", magicWand instanceof EnchantedObject);
console.log("Is anotherMagicWand an instance of EnchantedObject? ", anotherMagicWand instanceof EnchantedObject);
// A magical prototype for creating enchanted objects

/* The prototype property allows you to add properties and methods to a constructor function,
 which will be shared by all instances created from that constructor.
  This is a powerful feature in JavaScript that enables you
   to create objects with shared behavior without having to duplicate code for each instance.
    Here's an example of how to use the prototype property to create a magical prototype for enchanted objects:
*/
// function EnchantedObject(name, power) {
//     this.name = name;
//     this.power = power;
// }
// EnchantedObject.prototype.castSpell = function() {
//     return `${this.name} casts a spell with ${this.power}!`;
// }   
// const magicWand1 = new EnchantedObject('Magical Wand', 'Spell Casting');   
// const magicWand2 = new EnchantedObject('Enchanted Staff', 'Elemental Control');
// console.log(magicWand1.castSpell());
// console.log(magicWand2.castSpell());    

// // The prototype property can also be used to add properties to all instances of a constructor:
// EnchantedObject.prototype.element = 'Magic';
// console.log(magicWand1.element);
// console.log(magicWand2.element);    

// copyWithin
const techFields = ['Cybersecurity', 'Data Science', 'Machine Learning', 'Aritificial Intelligence', 'Cloud Computing',
    'Big Data', 'Internet of Things', 'Block Chain', 'Virtual Reality', 'Augmented Reality', '5G Technology',
    'Quantum Computing', 'DevOps', 'Robotics', 'Natural Language Processing', 'Computer Vision',
    'Containerization'];
console.log("The Original Tech Fields: ", techFields);

//techFields.copyWithin(int target index, int start index, int end index)
techFields.copyWithin(5, 0, 3);
console.log("The Tech Fields after 'copyWithin': ", techFields);

/* [Other's sudden note: this refers the global execution context
 (where in browser - refers window global object and for node environment refers the empty object
  since then no access of window object)
*/

// entries:
const entriesArr = { 0: 'Request', 1: 'Approval', 2: 'Access', 3: 'Execution', 4: 'Validation', 5: 'Completion' };
console.log("The Original Entries Array: ", entriesArr, "& type of entriesArr: ", typeof entriesArr);
// const entries = entriesArr.entries();
// console.log("The Entries Object: ", entries);

for (const [key, value] of Object.entries(entriesArr)) {
    console.log(`${key} : ${value}`);
}


// every: every in the array should satisfy the condition
const numbers = [45, 89, 67, 55, 202, 203, 401, 101, 2026];
const allGreaterThan40 = numbers.every((num) => num > 40);// check if all numbers in the array are greater than 40 which returns true if all numbers are greater than 40, otherwise returns false
console.log("All numbers greater than 40: ", allGreaterThan40);

// fill: fill the array with a static value from a start index to an end index:
const fillArray = new Array(10).fill(0); // creates an array of length 10 filled with 0
console.log("The Filled Array: ", fillArray);
fillArray.fill(7, 5, 8); // fills the array with 7 from index 5 to index 7 (end index is exclusive)
console.log("The Array after 'fill': ", fillArray);


// filter: filter the array based on a condition and returns a new array with the filtered elements:
const mixedNumber = [12, 45, 67, 89, 23, 56, 78, 90, 34, 21];
const evenNumbers = mixedNumber.filter((num) => num % 2 === 0); // filters the array to include only even
console.log("The Even Numbers with filter(): ", evenNumbers);

// find: find the first element in the array that satisfies a condition and returns that element, otherwise returns undefined:
const foundNum = mixedNumber.find((num) => num > 50); // finds the first number greater than 50
console.log("The First Number Greater than 50: ", foundNum);

// findIndex: returns the index of the first element in the array that satisfies a condition, otherwise returns -1
const foundIndex = mixedNumber.findIndex((num) => num > 50); // finds the index of the first number greater than 50
console.log("The Index of the First Number Greater than 50: ", foundIndex);

// findLast: find last element in the array that satisfies a condition and returns that elemnnt, ohterweise returns undefined:
const foundLastNum = mixedNumber.findLast((num) => num > 50); // finds the last number greater than 50
console.log("The Last Number Greater than 50: ", foundLastNum);

// findLastIndex: returns the index of the last element in the array that satisfies a condition, otherwise returbs -1
const foundLastIndex = mixedNumber.findLastIndex((num) => num > 50); // finds the index of the last number greater than 50 
console.log("The Index of the last Number Greater than 50: ", foundLastIndex);

// flat: it creates a new array with all sub-array elements concatenated into it recursively up to the specified depth:
const nestedArray = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]];
const flattendArr = nestedArray.flat(); // flattens the array one level deep
console.log("The Flattend Array: ", flattendArr);

// flatMap: if we want to apply a mapping function to each element of an array and then flatten the result into a new array, we can use flatMap:
const tobeFlatMap = [11, 5, 77, 13, 15, 89, 23, 22, 144, 34];
const flatMappedArr = tobeFlatMap.flatMap((num) => [num, num * 2]); // maps each number to an array containing the number and its double, then flattens the result 
console.log("The FlatMapped Array: ", flatMappedArr);

// flatMap example 2:
const sentences = ['Mazharul', "Django", 'is a skilled js & python developer', 'Fullstack', 'Odoo', 'React JS', "Django", "I love programming", "Django", 9];
const words = sentences.flatMap(s => s === 'Mazharul' ? 'Mazharul Islam Bhuiyan' : s); // if the sentence is 'Mazharul', it maps to 'Mazharul Islam Bhuiyan', otherwise is splits the senteence into words and flattens the result;
console.log("The FlatMapped Sentences collection: ", words);

// forEach: it executes a provided function once for each array element:
sentences.forEach((element) => console.log(`Each Data of the Sentence at indexOf ${sentences.indexOf(element)}:  ${element}`));

// includes: it determines whether on array includes a certain value among its entries, returning true or false as appropriate:
const hasValue = dataArray.includes('Python'); // checks if "Python" is included in the dataArray
console.log("Is 'Python' included in teh dataArray? ", hasValue);

// indexOf: indexOf the first occurrence of a specified value in the array, returns -1 if not found:
const indexOfPython = sentences.indexOf('Odoo'); // finds the index of "Odoo" in the sentences array
console.log("The Index of 'Odoo' in the sentences array: ", indexOfPython);

// join: join in the array elements into a string with a specified separator: 
const joinedSentences = sentences.join(' - '); // joins the sentences with " - " as a separator
console.log("The Joined Sentences: ", joinedSentences);

// keys in js
const dictionaryData = {
    name: 'Mazharul Islam Bhuiyan',
    profession:
    {
        'profession1': 'Fullstack Developer', 'profession2': 'Odoo Developer', 'profession3': 'Researcher', 'profession4': 'Django Developer', 'profession5': 'Teacher', 'profession6': 'Mentor', 'profession7': 'Content Creator',
    },
    skills: ['JS', 'Python', 'Django', 'Odoo', 'React JS', 'Node JS', 'AWS/Kubernetes', 'Docker', 'Data Science', 'Machine Learning'],
    experience: '5+ years of exprience in Software Development and Reseach',
    passion: ['Ethical Hacking', 'Programming', 'Mentoring', 'Research', ''],

}

console.log("The Original Dictionary Data: ", dictionaryData);
const keys_dict = Object.keys(dictionaryData); // returns an array of the keys in the dictinaryData object
console.log("The Keys of the Dictionary Data: ", keys_dict);

// lastIndexOf: it returns the last index at which a specified value can be found in the array, otherwise -1 if it is not present:
const lastIndexOfSentences = sentences.lastIndexOf('Django'); // finds the last index of "Django" in the sentences array 

console.log("The Last Index of 'Django' in the sentences array: ", lastIndexOfSentences, " & it's value: ", sentences[lastIndexOfSentences]);
// map in js: it creates a new array populated with the results of calling a provided function on every element in the calling array:
const mappedSentences = sentences.map((sent) => typeof sent === 'string' ? sent.toUpperCase() : sent); // maps each sentence to its uppercase version 
console.log("The Mapped Elements: ", mappedSentences);

// pop(): it removes the last element from an array and returns that element, otherwise returns undefined if the array is empty:
const poppedElement = sentences.pop();
console.log("The Popped Element as last elemnt of the sentences array: ", poppedElement);
console.log("The Sentences Array after 'pop': ", sentences);


// push(): it adds one or more elements to the end of an array and returns the new length of the array:
const newLength = sentences.push(10); // adds 10 to the end of the sentences array
console.log("The New Length of the Sentences Array after 'push': ", newLength);
console.log("The Sentences Array after 'push': ", sentences);

// reduce(): it executes a reducer function on each element of the array, resulting in a single output value: 
const sumOfNumbers = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // sums up all the numbers in the array, starting with an initial value of 0
console.log("The Sum of the Numbers using reduce: ", sumOfNumbers);

// reducdeRight: it excutes a reducer function on each element of the array from right to left, resulting in a single output value:
const sumOfNumbersRight = numbers.reduceRight((accm, curr) => accm + curr, 0); // sums up all the numbers in the array from right to left, starting with an initial value of 0
console.log("The Sum of the Numbers using reduceRight: ", sumOfNumbersRight);

/* The difference between reduce and reduceRight is the order in which the elements are processed.
reduce processes elements from left to right, while reduceRight processes them from right to left.
The reduceRight is especially is used when the order of processing is important for example in
cumulative operations.
When the order of processing is important, reduceRight can provide the desired result.
 */

// reverse
const reversedSentences = sentences.reverse(); // reverses the order of the sentences array:
console.log("The Reversed Sentences: ", reversedSentences);

// shift(): it removes the first element from an array and returns that element, otherwise returns undefined if the array is empty:
const shiftedElement = sentences.shift();

console.log("The Shifted Element as the first element of the sentences array: ", shiftedElement);
console.log("The Sentences Array after 'shift': ", sentences);

// shiftRight (>>): with this right shift operator, the bits of the number are shifted to the right and the leftmost bits are filled with 0s. This operator is used for unsigned integers and does not preserve the sign of the number. For example: 
const num1 = 16; // in binary: 00010000
const num2 = 15; // in binary 00001111
const rightSiftedNum = num2 >> num1; // shift the bits of num1 to the right by the number of positions specified by num2 (15 in this case)  
console.log("The Result of Right Shift Operator (>>): ", rightSiftedNum); // the result will be 0 because all bits of num1 will be shifted out to the right

// slice(): it returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included):
const slicedSentences = sentences.slice(2, 5); // slices the sentences array from index 2 to index 4 (end index is exclusice)
console.log("The Sliced Sentences: ", slicedSentences);

// some: it tests whether at least one element in the array passes the test implemented by the provided fucntion, returning true if at least one element passes the test, otherwise returns false:
const hasOddNumber = numbers.some((num) => num % 2 !== 0); // check if there is at least one odd number in the numbers array 
console.log("Is there at least one odd number in the numbers array? : ", hasOddNumber);

/*
 sort: it sorts the elements of an array in place and returns the sorted array.
 By default, the sort() method sorts the elements as strings in ascending order.
 However, you can provide a compare function to specify the sorting order and criteria.

 The compare function takes two argumrnts a and b, and should return:
  - A negative value if 'a' should come before 'b'
  - A positive value if 'a' should come after 'b'
  - Zero if 'a' and 'b' are considered equal in terms of sorting order
  Eample: ascending order sorted:
*/
const sortedNumbersAsc = numbers.sort((a, b) => a - b);  // sorts the numbers in ascending order
console.log("The sorted numbers in ascending order: ", sortedNumbersAsc);

// splice(): it changes the contents of an array by removing or replacing existing elemnets and/or adding new elements in place:
const ai_area_1 = ['Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Computer Vision', 'Reinforcement Learning', 'Generative AI', 'Explainable AI', 'AI Ethics', 'AI in Healthcare', 'AI in Finance'];
const ai_chapters = ['Introduction to AI', 'Machine Learning Basics', 'Deep Learning Fundamentals', 'Natural Language Processing', 'Computer Vision', 'Reinforcement Learning', 'Generative AI', 'Explainable AI', 'AI Ethics and Society', 'AI in Heathcare', 'AI in Finance', 'AI in Robotics', 'AI in Autonomous Systems', 'AI in Gaming', 'AI in Cybersecurity', 'AI in Education', 'AI in Business', 'AI in Art and Creativity', 'AI in Science and Research', 'Future of AI'];
console.log("The Original AI Chapters: ", ai_chapters);
ai_chapters.splice(2, 3, 'Deep Learning Fundamentals', 'NLP', '@Computer Vision'); // at index 2, removes  3 elements and adds 'Deep Learning Fundamentals', 'NLP', 'Computer Vision'
console.log("The AI Chapters after 'splice': ", ai_chapters);

// toLocaleString: it returns a string representing the elements of the array. The elements are converted to strings using their tolocaleString methods and are separated by a locale-specific string (such as a comma ",")
const localString = ai_area_1.toLocaleString(); // converts the ai_area_1 array to a local-specific string
console.log("The Local String Representation of the AI Area Array: ", localString);

// toReversed: it returns a new array with the elements in reverse order, without modifying the original array:
const toReversedArr = ai_chapters.toReversed(); // creates a new array with the elements of ai_chapters in reverse order
console.log("The Original AI Chapters Array: ", ai_chapters);
console.log("The Reversed AI Chapters Array using 'toReversed': ", toReversedArr);

// toSorted: it returns a new array with the elements sorted in ascending order, without modifying the original array:
const toSortedArr = ai_chapters.toSorted(); // creates a new array with the elements of ai_chapters sorted in ascending order
console.log("The Original AI Chapters Array: ", ai_chapters);
console.log("The Sorted AI Chapters Array using 'toSorted': ", toSortedArr);

// toSpliced: it returns a new arrray with the specified elements removed and/or replaced, without modifying the original array:
const toSliceArr = ai_chapters.toSpliced(2, 3, 'Deep Learning(DL)', 'NLP', '@Compute Vision'); // at indeex 2, removed 3 elements and adds 'Deep Learning(DL)', 'NLP', '@Computer Vision' in a new array
console.log("The Original AI Chapters Array: ", ai_chapters);
console.log("The New AI Chapters Array using 'toSpliced': ", toSliceArr);


// toString: it returns a string representing the elements of the array. The elements are converted to strings using their toString methods and are separated by commas:
const stringRepresentation = ai_area_1.toString(); // converts the ai_area_1 array to a string representation
console.log("The String Representation of the AI Area Array: ", stringRepresentation);

// unshift: it add one or more elements to the beginning of an array and returns the new length of the array:
const newLengthUnshift = ai_chapters.unshift('AI Overview', "AI History"); // add 'AI Overview' and 'AI History' to the beginning of the ai_chapters array 
console.log("The New Length of the AI Chapters Array after 'unshift': ", newLengthUnshift);
console.log("The AI Chapters Array after 'unshift': ", ai_chapters);


// value: it returns the primitive value of hte specified object:
const valueOfArray = ai_area_1.valueOf(); // returns the primitive value of the ai_area_1_array, which is the array itself
console.log("The Primitive value of the AI Area Array: ", valueOfArray, "\n & is it the same as the original array?");
console.log(valueOfArray === ai_area_1); // checks if the valueOfArray is the as the original ai_area_1 array, which returns true because the valueOf method for arrays returns the array itself

//with in js: it creates a new array with all elements that pass the test implemented by the provided function:
const withFilteredArr = ai_chapters.with(0, 'Deep Learning Fundamentals'); // creates a new array with the chapters that include 'Deep Learning Fundamentals'
console.log("The Chapters that include 'Deep Learning Fundamentals' using 'with': ", withFilteredArr);

// __proto__():being deprecated, it's not recommended to use __proto__ in modern JavaScript,
//  it is a property that point to the prototype of an object, which is used for inheritance and allows objects to access properties and methods defined in their prototype chain:
