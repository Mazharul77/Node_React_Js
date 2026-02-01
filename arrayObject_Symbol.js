const cars = ["Lamborgini", "Suzuki", "Volvo", "BMW", "Tesla", "Rolls-Royace"];
const symbolArray = Symbol(cars)
const country = ['USA', 'China', "Australia", "Norway", "England", "UK", "Finland"]
console.log("Symbol Cars:", symbolArray)

//.of: array making from selected picking
let carCombination = Array.of(country, cars)
console.log("Car Combination Array.of():", carCombination) 


// object  - symbol
let productInfo = {
    "name": "Bit Coin",
    "origin": "Virtual",
    [symbolArray]: "Conveyance",
    "demand": 1,
    "price": 99999999,
    "validity": 2099
} 
console.log("Product Details:", productInfo)
console.log("Product symbols:", productInfo[symbolArray], "and type:", typeof productInfo[symbolArray])

productInfo.validity = 2089
console.log("Current Validity of Product:", productInfo.validity);

// function create/definition from outsite of the object definition:
productInfo.orderPlace = function () {
    // console.log(`Total Invoice amount: ${this.demand * this.price}`);
    return `Total Invoice amount: ${this.demand * this.price}`;
}
console.log(productInfo.orderPlace()) // function call as declaration

// freeze() object: not to change later:
Object.freeze(productInfo) 
productInfo.validity = productInfo.validity + 1
console.log("Try Modified Validity?:", productInfo.validity) // value no change [freeze(object)]

// Object.assign({empty/targetArrName}, sourcesArr1, sourcesArr2), Object.keys(customObj), Object.values(customObj), Object.entries(customObj)
console.log("Object Assign - Merged Object:", Object.assign({}, productInfo, { seller: 'Best Buy', location: 'EU', warranty: '2 years' }))

console.log("All keys of the productInfo:", Object.keys(productInfo))
console.log("All values of the productInfo:", Object.values(productInfo))
console.log("All Keys and Values[.entries()] of the productInfo:", Object.entries(productInfo))

// hasOwnProperty():
console.log("Check field is exist?:", productInfo.hasOwnProperty('seller'))
console.log("Check name field is exist?:", productInfo.hasOwnProperty('name'), "which value:", productInfo.name)