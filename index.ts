// enum CoffeeSize {
//     SHORT = 'SHORT',
//     TALL = 'TALL',
//     GRANDE = 'GRANDE',
//     VENTI = 'VENTI'
// }

// const coffee = {
//     hot: true,
//     size: CoffeeSize.TALL,
// }

/* boolean型とnumber型とstring型を使う方法 */

let hasValue: boolean = true;
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;
// javascript.typescriptは少数・マイナスもnumber型でいける
let single: string ='hello';


/* 型注釈と型推論 */

// 基本的には、型推論でやる（いちいち書くの大変）
// 型推論ができない時のみ型注釈で記述（例）any型など


/* オブジェクトに型をつける方法 */

const person : {
    name: string;
    age: number;
} = {
    name: 'Jack',
    age: 21,
}

console.log(person.age);


/* 配列に型をつけるArraｙ型はこう使う */

const fruits: string[] = ['apple', 'banana', 'greap']
// 配列に型をつけると、不必要なものが入ることを防げる
const fruit = fruits[0];


/* Tuple型を使用して、決まった内容の配列を作る方法 */

const book: [string, number, boolean] = ['business', 1500, false];
book[1] = 750; //　いける
// book[1] = 'hello';　エラー起きる
// 初期値は厳しくチェック。しかしpushはゆるい。そして参照するときは厳しい。


/* Enumを使って、特定のまとまったグループのみを受け入れる列挙型を使う方法 */

// enum = 列挙

// enum coffeeSizes  {
//     SHORT = 'SHORT',
//     TALL = 'TALL',
//     GRANDE = 'GRANDE',
//     VENTI = 'VENTI'
// }
// 実は文字列にする必要ない

enum coffeeSizes  {
    SHORT,
    TALL,
    GRANDE,
    VENTI,
}

const coffee = {
    hot: true,
    size: coffeeSizes.SHORT,
}
