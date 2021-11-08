"use strict";
let hasValue = true;
let count = 10;
let float = 3.14;
let negative = -0.12;
let single = 'hello';
const person = {
    name: 'Jack',
    age: 21,
};
const fruits = ['apple', 'banana', 'greap'];
const fruit = fruits[0];
const book = ['business', 1500, false];
book[1] = 750;
var coffeeSizes;
(function (coffeeSizes) {
    coffeeSizes[coffeeSizes["SHORT"] = 0] = "SHORT";
    coffeeSizes[coffeeSizes["TALL"] = 1] = "TALL";
    coffeeSizes[coffeeSizes["GRANDE"] = 2] = "GRANDE";
    coffeeSizes[coffeeSizes["VENTI"] = 3] = "VENTI";
})(coffeeSizes || (coffeeSizes = {}));
const coffee = {
    hot: true,
    size: coffeeSizes.SHORT,
};
let unionType = 10;
unionType = 'hello';
let unionTypes = [21, 'hello'];
let apple = 'apple';
const banana = 'banana';
const cloth = {
    color: 'white',
    size: 'midium'
};
function add(num1, num2) {
    return num1 + num2;
}
add(3, 2);
function sayHello() {
}
const anotherAdd = add;
const doubleNumber = number => number * 2;
function doubleAndHandle(num, cb) {
    const doubleNum = cb(num * 2);
}
doubleAndHandle(21, doubleNum => {
    return doubleNum;
});
let unKnownInput;
let anyInput;
unKnownInput = 'hello world';
unKnownInput = 21;
unKnownInput = true;
let text;
text = anyInput;
function error(message) {
    throw new Error(message);
}
console.log(error('aa'));
