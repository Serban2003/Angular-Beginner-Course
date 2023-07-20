"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    //Only one constructor can be instantiated
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
        Employee.employeeCount++;
    }
    get empId() { return this.id; }
    set empId(id) { this.id = id; }
    getNameWithAddress() {
        // return this.name + " " + this.address;
        return `${this.name} stays at ${this.address}`;
    }
    static getEmployeeCount() {
        return Employee.employeeCount;
    }
    Login() {
        return { id: this.id, name: this.name, email: " " };
    }
}
Employee.employeeCount = 0;
let john = new Employee(1, "John", "Highway 11");
// john.id = 1;
// john.name = 'John';
// john.address = 'Highway 11';
console.log(john);
console.log(john.getNameWithAddress());
john.empId = 10; //calls the setter
console.log(john.empId); //calls the getter
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getNameWithAddress() {
        return `${this.name} is a manager at ${this.address}`;
    }
}
let mike = new Manager(1, "Mike", "Arizona");
console.log(mike.getNameWithAddress());
console.log(Employee.getEmployeeCount());
//# sourceMappingURL=classes.js.map