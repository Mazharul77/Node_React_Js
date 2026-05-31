// getOwnPropertyDescriptor
descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log("PI property descriptor of Math is: ", descriptor);

const Profile = {
    name: 'Mazharul Islam Bhuiyan',
    designation: 'Software Engineer',
    contact: 'mazharul77.cse@gmail.com',

    developEcommerceErp: function(){
        console.log('Design & Develop Erp and Ecommerce Website');
    }

}

profile_descriptor = Object.getOwnPropertyDescriptor(Profile, 'contact');
console.log(profile_descriptor);

// now I can define property not to edit/overrite some properties of my own custom created object:

Object.defineProperty(Profile, 'contact', {
    writable: false,
    enumerable: true,
    // enumerable: false,
});
console.log("After define property the property descriptor of Profile: ",
    Object.getOwnPropertyDescriptor(Profile, 'contact'));

// let's iterating each props withing Profile Object:
console.log("\n\t Let's iterating each props within Profile Object:\n");
for (let [key, value] of Object.entries(Profile)) {
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`);
    }
}