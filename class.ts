// クラス名は一般的に最初は大文字
class Person {
    constructor(public name: string, private age:number)
    {
    }
    // これで全ての初期化が完了

    incrementAge() {
        this.age += 1;
    }

    // greeting(this:{ name: string }) {
    //     console.log(`Hello My name is ${this.name}`);
    // 以下のように書ける
    greeting(this: Person) {
        console.log(`Hello My name is ${this.name}. I am ${this.age} years old.`);
    }
}
// let person2: Person;
// const yocchan = new Person('Yocchan', 19);
// yocchan.incrementAge();
// yocchan.greeting();


// readonly 　読むだけになる、書けなくなる

class Theacher extends Person {
    get subject() {
        return 'Music'
    }
    constructor(name: string, age: number, private _subject: string){
        super(name, age);
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} yaers`)
    }
}

const teacher = new Theacher('Yocchan', 19,'Math');
console.log(teacher.subject);
teacher.greeting();

