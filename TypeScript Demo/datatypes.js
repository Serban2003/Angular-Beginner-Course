"use strict";
function sayHello(name) {
    console.log(`Hello ${name}`);
}
//String
let lname;
lname = "Serban";
let newname = lname.toUpperCase();
console.log(newname);
//Number
let age;
age = 20;
age = 25.5;
let dob = "25";
let result = parseInt(dob);
//Boolean
let isValid;
isValid = true;
isValid = false;
//Array
let empList;
empList = ["a", "b", "c", "d", "e"];
let numList;
numList = [1, 3, 6];
let results = numList.filter((num) => num > 2);
console.log(results);
let num = numList.find((num) => num === 3);
console.log(num);
let emp = empList.find((emp) => emp === "a");
console.log(emp);
let sum = numList.reduce((acc, num) => acc + num);
console.log(sum);
let color = 2 /* Color.Blue */;
//Tuples
let swapNum;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNum = swapNumbers(10, 22);
console.log(swapNum[0]);
//Any
let department;
department = "IT";
department = 10;
