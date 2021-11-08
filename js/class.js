"use strict";
class Person {
    constructor(initName) {
        this.name = initName;
    }
    greeting() {
        console.log(`Hello My name is ${this.name}`);
    }
}
const yocchan = new Person('Yocchan');
yocchan.greeting();
