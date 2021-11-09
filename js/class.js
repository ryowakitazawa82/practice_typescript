"use strict";
class Person {
    constructor(initName, initAge) {
        this.name = initName;
        this.age = initAge;
    }
    incrementAge() {
        this.age += 1;
    }
    greeting() {
        console.log(`Hello My name is ${this.name}. I am ${this.age} years old.`);
    }
}
let person2;
const yocchan = new Person('Yocchan', 19);
yocchan.incrementAge();
yocchan.greeting();
