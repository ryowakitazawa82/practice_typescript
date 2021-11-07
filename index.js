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
var hasValue = true;
var count = 10;
var float = 3.14;
var negative = -0.12;
// javascript.typescriptは少数・マイナスもnumber型でいける
var single = 'hello';
/* 型注釈と型推論 */
// 基本的には、型推論でやる（いちいち書くの大変）
// 型推論ができない時のみ型注釈で記述（例）any型など
/* オブジェクトに型をつける方法 */
var person = {
    name: 'Jack',
    age: 21
};
// console.log(person.age);
/* 配列に型をつけるArraｙ型はこう使う */
var fruits = ['apple', 'banana', 'greap'];
// 配列に型をつけると、不必要なものが入ることを防げる
var fruit = fruits[0];
/* Tuple型を使用して、決まった内容の配列を作る方法 */
var book = ['business', 1500, false];
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
var coffeeSizes;
(function (coffeeSizes) {
    coffeeSizes[coffeeSizes["SHORT"] = 0] = "SHORT";
    coffeeSizes[coffeeSizes["TALL"] = 1] = "TALL";
    coffeeSizes[coffeeSizes["GRANDE"] = 2] = "GRANDE";
    coffeeSizes[coffeeSizes["VENTI"] = 3] = "VENTI";
})(coffeeSizes || (coffeeSizes = {}));
var coffee = {
    hot: true,
    size: coffeeSizes.SHORT
};
/* any型 */
// anyはなんでも入る
// anyはなるべく使わない、カオスになる
/* Union型を使って複数の型を使用する方法 */
var unionType = 10; // numberも入れたいし、stringもいれたい、、とき
unionType = 'hello'; // エラー起きない！
var unionTypes = [21, 'hello'];
/* Literal型を使って特定の値のみ取り扱う方法 */
var apple = 'apple'; // 完全に決まった方のみを扱う
var banana = 'banana'; // constにすると上と同じに
var cloth = {
    color: 'white',
    size: 'midium'
};
/* 関数に型を適応させる方法 */
function add(num1, num2) {
    return num1 + num2;
}
//パラメータの後ろに戻り値の型をつける
// 型推論は？戻り値は効くが、引数は効かない
// 関数が複雑になった時に戻り値に型注釈してあると、わかりやすいからつけるべきである
add(3, 2);
/* 関数の戻り値にvoid型を使う方法 */
function sayHello() {
    // console.log('Hello')
}
// console.log(sayHello());
// consoleの結果
// Hello
// undefined
/* 関数を使って、特定の関数のみを代入できる変数を作る */
var anotherAdd = add;
// const anotherAdd:(n1: number, n2: number)=> number  = function add(num1: number, num2: number): number {
//     return num1 + num2
// };
//無名関数にすることも可能
//アロー関数は？
// const doubleNumber = (number: number): number => number *2; //アロー関数なのに右側が長い！！
var doubleNumber = function (number) { return number * 2; }; //左につけりゃいい
/* callback関数の型はこう書く */ //※理解浅いから要復習
function doubleAndHandle(num, cb) {
    var doubleNum = cb(num * 2);
    // console.log(doubleNum);
}
doubleAndHandle(21, function (doubleNum) {
    return doubleNum;
});
/* unKnown型を使って、柔軟でanyよりも厳しい型を使用する方法 */ //※理解浅いから要復習
var unKnownInput;
var anyInput;
unKnownInput = 'hello world';
unKnownInput = 21;
unKnownInput = true;
// unknown型はanyと同じくなんでも入れられる
// じゃあどこが違う？
var text;
// text = unKnownInput; //エラー出る
text = anyInput; //anyだとエラー出ないのに
/* never型を使って、起こり得ない値の方を使用する方法 */
function error(message) {
    throw new Error(message);
}
console.log(error('aa'));
