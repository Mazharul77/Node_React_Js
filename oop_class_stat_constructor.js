class customerInfo {
    // normally constructor is auto call when new object is created. However, we'll create custom constructor here
    constructor(customer, email, phone) {
        // set this as context of varibale set
        this.customer = customer;
        this.email = email;
        this.phone = phone;
    }

    generateLead() {
        console.log(`${this.customer} has negotiated to purchase some items over the phone(${this.phone}).`);
    }

}

const data = new customerInfo('Mr. William', 'mw@gmail.com', '01234567891');
data.generateLead();



// former technique (using prototype)
function purchaserRecording(name, so_no, contact) {
    this.name = name;
    this.so_no = so_no;
    this.contact = contact;
}

purchaserRecording.prototype.opportunityCreate = function () {
    return this.so_no;
}

const pR_obj = new purchaserRecording('Philips', 'SO-1101', 'phil@gmail.com');
console.log(pR_obj.opportunityCreate());



// inheritance: 
class portalDashboard extends customerInfo {
    constructor(customer, total_customers, sale_amount, revenue) {
        super(customer);

        this.total_customers = total_customers;
        this.sale_amount = sale_amount;
        this.revenue = revenue;
    }

    // just a sample data as an example: can to be updated according to requirements
    viewCustomerData() {
        console.log(`${this.customer} has purchased on avg. of ${(this.sale_amount / this.total_customers) * 100} %`);
    }
    
    // private method internal operations only not to provide access
    static calculateBankBalance() {
        console.log(`Approximate annual income: ${this.revenue * 12}`);
    }
}
const dashboard = new portalDashboard('New liam', 5000, 700555, 305000);
dashboard.viewCustomerData();

// after inherit instance check:
console.log("Is dashboard isinstance of portalDashboard?: ", dashboard instanceof portalDashboard);
console.log("Is dashboard isinstance of customerInfo?: ", dashboard instanceof customerInfo);
