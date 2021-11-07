"use strict";
var hasValue = true;
var count = 10;
var float = 3.14;
var negative = -0.12;
var single = 'hello';
var person = {
    name: 'Jack',
    age: 21,
};
var fruits = ['apple', 'banana', 'greap'];
var fruit = fruits[0];
var book = ['business', 1500, false];
book[1] = 750;
var coffeeSizes;
(function (coffeeSizes) {
    coffeeSizes[coffeeSizes["SHORT"] = 0] = "SHORT";
    coffeeSizes[coffeeSizes["TALL"] = 1] = "TALL";
    coffeeSizes[coffeeSizes["GRANDE"] = 2] = "GRANDE";
    coffeeSizes[coffeeSizes["VENTI"] = 3] = "VENTI";
})(coffeeSizes || (coffeeSizes = {}));
var coffee = {
    hot: true,
    size: coffeeSizes.SHORT,
};
var unionType = 10;
unionType = 'hello';
var unionTypes = [21, 'hello'];
var apple = 'apple';
var banana = 'banana';
var cloth = {
    color: 'white',
    size: 'midium'
};
function add(num1, num2) {
    return num1 + num2;
}
add(3, 2);
function sayHello() {
}
var anotherAdd = add;
var doubleNumber = function (number) { return number * 2; };
function doubleAndHandle(num, cb) {
    var doubleNum = cb(num * 2);
}
doubleAndHandle(21, function (doubleNum) {
    return doubleNum;
});
var unKnownInput;
var anyInput;
unKnownInput = 'hello world';
unKnownInput = 21;
unKnownInput = true;
var text;
text = anyInput;
function error(message) {
    throw new Error(message);
}
console.log(error('aa'));
