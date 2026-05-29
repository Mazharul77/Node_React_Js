/* call mechanism with call method along with arguments */

// setting properties
function pupilIdentify(studentId, studentName) {
    this.studentId = studentId;
    this.studentName = studentName;
    console.log(`Student Id: ${this.studentId}, and the Student Name: ${this.studentName}`);
}

// ceating an object
function CreateStudent(id, name, email, section) {
    // calling the function with 'call' method and passing the arguments with 'this' keyword to set the propertes in the current object
    pupilIdentify.call(this, id, name);

    this.email = email
    this.section = section
}

const studentG = new CreateStudent(1425, 'Mazharul Islam Bhuiyan', 'mazharul15 - 1425@diu.edu.bd', 'G');
console.log(studentG);

/*
bind mechanism with bind method:
*/

class Binder {
    constructor() {
        this.name = 'Mazharul Islam Bhuiyan'
        this.request_url = 'https://www.github.com/mazharul77'
        this.designation = 'Software Engineer'

        // on click bind method to the button andd passing the arguments to the function
        document.querySelector('.bind_now').addEventListener('click', this.manageRequest.bind(this, 'Requesting for a job'))
    }
    manageRequest(message) {
        console.log(`The Binder has successfully bound to pass the consturctor's data at manage function!`);

        console.log(`The binding message: ${message}`);
        console.log(`The Request for binder: ${this.request_url}`);

    }
}

const boundObj = new Binder();