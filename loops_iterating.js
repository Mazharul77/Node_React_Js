// Several Iterations: For Loop sample
let totalItems = 5;
for (let itemNumber = 1; itemNumber <= totalItems; itemNumber++){
    const ingredient = itemNumber;
    if (ingredient == 3) {
        console.log("\tCombo package is ready with 3 items.");
    }
    console.log("Current item/ingredient number is: " + ingredient);

    // inner loop as nested against each outer item's from loop:
    for (let itemPrice = 50; itemPrice <= 100000; itemPrice *= 10){
        console.log(`For ittemNumber ${itemNumber} => Varient's itemPrice: ${itemNumber} * ${itemPrice} = ${itemNumber * itemPrice}`);
    }
}

// sample array iteration with for loop:
let languageTests = ['IELTS', 'TOEFL', 'GRE', 'GMAT', 'PTE',
    'CELPIP', 'OET', 'Duolingo', 'TEF', 'TCF', 'DELF', 'DALF',
    'DELF Scolaire', 'DELF Prim', 'DELF Junior', 'DELF Pro',
    'DELF Tout Public'];

length_languageTests = languageTests.length;
console.log('The Length of the Language Tests Array :' + length_languageTests);

for (let test = 0; test < length_languageTests; test++){
    console.log('The one of the language tests is:',test+1, ': ', languageTests[test]);
}


// break [execute specific conditions and if the condition is met loop is stopped]
//  and continue[execute specific conditions and if the condition is met loop is continued to next iteration] in loops:
for (let testSerial = 0; testSerial < length_languageTests; testSerial++){
    console.log(languageTests[testSerial]);
    if (testSerial > 3) {
        console.log('These test are enough for English Language Proficiency: ');
        break;
    }
}



// use and effect of continue in loops:
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${index}`);
}   

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         continue
//     }
//     console.log(`Value of i is ${index}`);

// }