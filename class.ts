// クラス名は一般的に最初は大文字
class Person {
    name: string;
    private age: number; // 後から変更したくない！そんなときはprivate修飾子
    
    constructor(initName: string, initAge:number) {
        this.name = initName;
        this.age = initAge;
    }

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
let person2: Person;
const yocchan = new Person('Yocchan', 19);
yocchan.incrementAge();
yocchan.greeting();

