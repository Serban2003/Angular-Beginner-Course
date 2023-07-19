// import {Login, User} from './interface';
import * as UserLogin from './interface';

class Employee implements UserLogin.Login{
    private id : number; //add ! to the variable to remove warning about constructor
    name : string; //add # to the variable to make it private (need to add to every occurence of the variable)
    protected address : string; //available to the class and the clases which extend it

    static employeeCount : number = 0;

    //Only one constructor can be instantiated
    constructor(id: number, name: string, address: string) {
            this.id = id;
            this.name = name;
            this.address = address;
            Employee.employeeCount++;
    }

    get empId() : number { return this.id; }
    set empId(id: number){ this.id = id; }

    getNameWithAddress() : string { 
        // return this.name + " " + this.address;
        return `${this.name} stays at ${this.address}`;
    }

    static getEmployeeCount() : number {
        return Employee.employeeCount;
    }

    Login(): UserLogin.User {
        return {id: this.id, name : this.name, email : " "};
    }
}

let john = new Employee(1, "John", "Highway 11");
// john.id = 1;
// john.name = 'John';
// john.address = 'Highway 11';

console.log(john);
console.log(john.getNameWithAddress());

john.empId = 10; //calls the setter
console.log(john.empId); //calls the getter

class Manager extends Employee {

    constructor(id : number, name : string, address : string){
        super(id, name, address);
    }

    getNameWithAddress(): string {
        return `${this.name} is a manager at ${this.address}`;
    }
}

let mike = new Manager(1, "Mike", "Arizona");
console.log(mike.getNameWithAddress());

console.log(Employee.getEmployeeCount());