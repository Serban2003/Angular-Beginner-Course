"use strict";
// Add function with num3 optional parameter
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(1, 2));
//Default value for num3 if othe value not passsed to function
const sub = (num1, num2, num3 = 10) => num1 - num2 - num3;
console.log(sub(1, 2));
const mult = function (num1, num2) {
    return num1 * num2;
};
console.log(mult(1, 2));
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [1, 2, 3, 4, 5];
console.log(add2(2, 3, ...numbers));
