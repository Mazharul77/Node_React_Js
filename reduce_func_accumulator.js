// with reduce func: (accumulator, current_vals): with array

const examScores = [70, 82, 73, 94, 59, 76, 97, 78, 79, 100]
let totalMark = examScores.reduce(function (accumulator, currentValue) {
    console.log(`The accumulator:${accumulator} and the currentValue:${currentValue}`);
    return (accumulator + currentValue);
}, 0) 
console.log(`The calculated average of examScores:${totalMark / examScores.length}`);

/*
 Following orderInfo is an array of dictionaries.
 We want to calculate the total price for each order and
  then calculate the grand total for all orders.
*/

const orderInfo = [
    {
        'name': 'Mr. Bhuiyan',
        'product_name': 'Blanket',
        'quantity': 4,
        'unit_price': 3500,
    },
    {
        'name': 'Mr. Rahman',
        'product_name': 'Pillow',
        'quantity': 2,
        'unit_price': 1200,
    },
    {
        'name': 'Ms. Akter',
        'product_name': 'Bedsheet',
        'quantity': 3,
        'unit_price': 2500,
    },
]

const grandTotal = orderInfo.reduce((acc, each_order) => (acc + (each_order.unit_price*each_order.quantity)), 0);
console.log(`The grand total for all oder is: ${ grandTotal }`);
