function sayHello(name: string) {
    console.log(`Hello ${name}`);
}

//String

let lname : string;
lname = "Serban";

let newname = lname.toUpperCase();
console.log(newname);

//Number

let age : number;
age = 20;
age = 25.5;

let dob = "25";

let result = parseInt(dob);

//Boolean

let isValid : boolean;
isValid = true;
isValid = false;

//Array

let empList : string[];
empList = ["a", "b", "c", "d", "e"];

let numList : Array<number>;
numList = [1, 3, 6];

let results = numList.filter((num) => num > 2);
console.log(results);

let num = numList.find((num) => num === 3);
console.log(num);

let emp = empList.find((emp) => emp === "a");
console.log(emp);

let sum = numList.reduce((acc, num) => acc + num);
console.log(sum);

//Enum

const enum Color{
    Red,
    Green,
    Blue
}

let color : Color = Color.Blue;

//Tuples

let swapNum : [first : number, second : number];

function swapNumbers(num1 : number, num2 : number) : [number, number]{
    return [num2, num1];
}

swapNum = swapNumbers(10, 22);
console.log(swapNum[0]);

//Any

let department : any;
department = "IT";
department = 10;