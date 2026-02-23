//filtering array in js:
const productInfo = [
    { name: 'Laptop', price: 10000 },
    { name: 'Phone', price: 25000 },
    { name: 'Tablet', price: 30000 },
    { name: 'Monitor', price: 20000 },
    { name: 'Keyboard', price: 5000 },
    { name: 'Mouse', price: 600 }
]
// filter the products that are more expensive than 600 and less than or equal to 30000

const affordableProducts = productInfo.filter((product) => product.price > 600 && product.price <= 30000);
console.log(`The affordable products are: ${affordableProducts.map(product => product.name + '(price:'+product.price + ')').join(', ')}`);
// mapping array in js:

// map and filter together:
const examScores = [70, 82, 73, 94, 59, 76, 97, 78, 79, 100]
let grace = 5
const gpa_5_marks = examScores
    .map((score) => score + grace)
    .map((score) => score > 100 ? score - 5 : score)
    .filter((letterMark) => letterMark >= 80)

console.log("The GPA 5 marks achieved by students are:", gpa_5_marks);


