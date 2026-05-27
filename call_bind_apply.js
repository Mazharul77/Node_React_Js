// call function with call method along with arguments

// setting properties
function pupilIdentify(studentId, studentName) {
    this.studentId = studentId;
    this.studentName = studentName;
    console.log(`Student Id: ${this.studentId}, and the Student Name: ${this.studentName}`);
}

// ceating an object
function CreateStudent(id, name, email, section) {
    // calling the function with 'call' method and passing the arguments with 'this' keyword to set the propertes in the current object
    pupilIdentify.call(this,id, name);

    this.email = email
    this.section = section
}

studentG = new CreateStudent(1425, 'Mazharul Islam Bhuiyan',  'mazharul15 - 1425@diu.edu.bd', 'G');
console.log(studentG);

