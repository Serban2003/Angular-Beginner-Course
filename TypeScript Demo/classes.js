"use strict";
class Employee {
    //Only one constructor can be instantiated
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
        Employee.employeeCount++;
    }
    getNameWithAddress() {
        // return this.name + " " + this.address;
        return `${this.name} stays at ${this.address}`;
    }
    static getEmployeeCount() {
        return Employee.employeeCount;
    }
}
Employee.employeeCount = 0;
let john = new Employee(1, "John", "Highway 11");
// john.id = 1;
// john.name = 'John';
// john.address = 'Highway 11';
console.log(john);
console.log(john.getNameWithAddress());
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
