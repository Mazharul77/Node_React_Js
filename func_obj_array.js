const customerRecord = {
    "userName": "Mr. Curl Mark",
    "contact": "0123456789",
    "age": 50,
    "orderedItem": ["Papers", "Pencil", "Fruits"]

}

function prepareLead(getCustomerObject) {
    return getCustomerObject.userName + " ordered                                                                                                                                                                                    " + getCustomerObject.orderedItem.join(", ");
}

// method 1 for calling the fucntion with object variable:
console.log(prepareLead(customerRecord));


// // method 2 for calling the function directly with object
// console.log(prepareLead({
//     "userName": "Ms. Lara Croft",
//     "contact": "0987654321",
//     "age": 35,
//     "orderedItem": ["Laptop", "Mouse", "Keyboard"]
// }));