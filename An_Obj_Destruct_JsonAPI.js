// Object Destructuring with JSON API or Array Destructuring:

const invoiceData = {
    'invoiceId': 'INV-PI00101',
    'invName': 'Customer Invoice',
    'amountTotal': 3500,
    'currecncy': 'USD',
    'items': [
        {
            'freelanceServId': 'FS001',
            'description': 'ERP/Ecommerce Solution',
            'qty': 3,
            'unitPrice': '$500',
        },
        
    ],

}
// Destructuring the invoiceData object
const { invoiceId, amountTotal: amount, items } = invoiceData;
console.log("The Invoice Id:", invoiceId, "and the Item's unit price:", items[0].unitPrice,
    `\n with Total Amount: $${amount}`
);

// Array Destructuring
const currencies = ['USD', 'EUR', 'GBP', 'INR', 'AUD'];
const [firstCurrency, secondCurrency, , fourthCurrency] = currencies;
console.log("First Currency:", firstCurrency);
console.log("Second Currency:", secondCurrency);
console.log("Fourth Currency:", fourthCurrency);