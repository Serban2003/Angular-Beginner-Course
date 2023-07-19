// Add function with num3 optional parameter
function add(num1 : number, num2 : number, num3? : number) : number{
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(1, 2));


//Default value for num3 if othe value not passsed to function
const sub = (num1 : number, num2 : number, num3 = 10) : number => num1 - num2 - num3;
console.log(sub(1, 2));


const mult = function(num1 : number, num2 : number) : number {
    return num1 * num2;
}
console.log(mult(1, 2));


//Rest parameter
function add2(num1 : number, num2 : number, ...num3 : number[]) : number{
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
console.log(add2(2, 3, ...[1, 2, 3]));
console.log(add2(2, 3, 4, 5, 6));


//Generic function
function getItems<Type>(items : Type[]) : Type[] {
    return new Array<Type>().concat(items);
}

let concatResult = getItems<number>([1, 2, 3, 4, 5]);
let concatString = getItems<string>(["a", "b", "c", "d"]);