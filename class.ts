// クラス名は一般的に最初は大文字
class Person {
    name: string;
    constructor(initName: string) {
        this.name = initName;
    }

    greeting(this:{ name: string }) {
        console.log(`Hello My name is ${this.name}`);
    }
}
const yocchan = new Person('Yocchan');
yocchan.greeting();
// console.log(yocchan);
