/*
    array , push, pop, flat, concat, unshift, shift, ...spread,
    len, slice,  symbol, object(construct, literal), 

*/
const quotationOrder = ['Ferrari', 'Tesla', 185000000, 2026, 'California', 'NY', ['career', '2026', 'Engineering', 29]];
console.log("Sample Quotaion data:", quotationOrder, "Type of quotaion:", typeof quotationOrder);
console.log("Length of Quotaion data:", quotationOrder.length)

let FlattendArray = quotationOrder.flat(Infinity);
console.log("Flattend of Quotaion data:", FlattendArray);
console.log("Original of Quotaion data:", quotationOrder);

const draftOrder = new Array('Ferrari', 'Tesla', 185000000, 2026, 'California', 'NY');
console.log("Sample draftOrder data:", draftOrder, "Type of draftOrder:", typeof draftOrder);

// merged arrary:
let newLengthPush = quotationOrder.push(draftOrder);
console.log("The Merged Orders:", quotationOrder);

let lastQOdata = quotationOrder[quotationOrder.length - 1];
console.log("lastQOdata", lastQOdata);

// push [at end position by default]
let Changed_quotationOrder = quotationOrder[quotationOrder.length - 1].push(9);
let Changed_quotationOrder2 = quotationOrder[quotationOrder.length - 1].push(10);
console.log("Pushed Changed_quotationOrder", Changed_quotationOrder, "and", Changed_quotationOrder2);
console.log("Checking Original quotationOrder", quotationOrder);

//pop [at end position by default]

let pop_quotationOrder = quotationOrder[quotationOrder.length - 1].pop();
let popChanged_quotationOrder2 = quotationOrder[quotationOrder.length - 1].pop();
console.log("Poped Changed_quotationOrder", pop_quotationOrder, "and", popChanged_quotationOrder2);
console.log("Checking Original quotationOrder", quotationOrder);

// concat
let concatedArray = quotationOrder.concat(draftOrder);
console.log("The concated Array: ", concatedArray)

//flat: concated:
let FlattenConcatedArray = concatedArray.flat();
console.log("The FlattenConcatedArray: ", FlattenConcatedArray)

// ...spread [auto concated with ... operator]
const cars = ["Suzuki", "Volvo", "BMW", "Tesla"];
const country = ['USA', 'China', "Australia", "Norway"]
combined_cc = [...cars, ...country]
console.log("With spread combined array data:", combined_cc)

// unshift (right side shift: so new passed element is inserted in the first position)
const Unshift_combined_cc = combined_cc.unshift(199)
console.log("Shifted Position for unshift:", Unshift_combined_cc)
console.log("Data due to unshift:", combined_cc)

// shift (left side shift: so first element cut off)
const shift_combined_cc = combined_cc.shift()
console.log("With shift- Shifted Position for shift:", shift_combined_cc)
console.log("With shift- Data due to shifted:", combined_cc)
