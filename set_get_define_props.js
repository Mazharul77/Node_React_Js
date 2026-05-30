 
 /*
 JavaScript accessor properties are defined with the keywords
  get and set. When a property is read (get) or updated (set),
   they let us run custom code, but instead of invoking a method,
    the syntax appears exactly like accessing a regular property.
 */

class Employee {
    constructor(login, password) {
        this.login = login;
        this.password = password;
    }

    // getter and setter for password:

    get password() {
        return `#${this._password.charAt(0).toUpperCase() +
            this._password.slice(1)}#`
    }

    set password(pw) {
        this._password = pw
    }

    // getter and setter for login:

    get login() {
        return `${this._login}`;
    }
    set login(email) {
        this._login = email
    }
}

// props object creation:
const emp = new Employee('bhuiyan@gmail.com', 'p@$$w');
console.log(`Employee's login Email: ${emp.login} \n & password: ${emp.password}`);


// with define properties: instead of set() and get() as an alternative:
function Staff(staff_id, credential) {
    this._staff_id = staff_id;
    this._credential = credential

    /*  the defineProperty refers set and get property.
     with defineProperty method:need to provide
      1. 'this' context along with
      2. property which to be overwrite.
      3. 3rd parameter is the object which property to be defined

    */

    Object.defineProperty(this, 'staff_id', {
        get: function () {
            return this._staff_id
        },
        set: function (vals) {
            this._staff_id = vals
        }
    });

    Object.defineProperty(this, 'credential', {
        get: function () {
            return this._credential
        },
        set: function (vals) {
            this._credential = vals
        }
    });
}

staff_ref = new Staff('15-007', 'p#**w');
console.log("The Staff owns: ", staff_ref.staff_id, "-id", "whose login credential as password is: ", staff_ref.credential);


/**
lets's operate with object base getter and setter in js:
 for property access control and props view control

*/

const Servant = {
    _email: 's@gmail.com',
    _password: 'p**s',

    get service_email(){
        return this._email.toUpperCase()
    },
    
    set service_email(raw_value){

    this._email = raw_value
    }
}

// now need to create with factory function for object based on user object
const data = Object.create(Servant);
console.log("\n \t Service Provider contact for Object Service: ", data.service_email);