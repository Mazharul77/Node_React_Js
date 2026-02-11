//rest operators... : combining/concatanating the data with only operators:
let list_data1 = [444, 'bendelaz', 777]
let list_data2 = ['Mit', 999, 'Hamza', 101, 'Jonathon']
let mergedData = [...list_data1, ...list_data2]
console.log("The concatanated/merged flattend data with rest operators[1d]: ", mergedData)




//spread operators...
function restOperations(numGroups, ...unlimitedUnknown) {
    // let data1 = numGroups
    // let dataGroups = unlimitedUnknown
    console.log("The first data in 'numGroups' is:", numGroups, " and the others data in 'unlimitedUnknown':", unlimitedUnknown)
    return true
}
console.log("With Rest of list_data:", restOperations(999, 'Hamza', 101, 'Jonathon'))