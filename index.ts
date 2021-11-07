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

// console.log(person.age);


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


/* any型 */

// anyはなんでも入る
// anyはなるべく使わない、カオスになる


/* Union型を使って複数の型を使用する方法 */

let unionType: number | string = 10; // numberも入れたいし、stringもいれたい、、とき
unionType = 'hello'; // エラー起きない！

let unionTypes: (number | string) [] = [21, 'hello']


/* Literal型を使って特定の値のみ取り扱う方法 */

let apple: 'apple' = 'apple'; // 完全に決まった方のみを扱う
const banana = 'banana'; // constにすると上と同じに

//Literal型っていつ使うの？ Union型とLiteral型を組み合わせることでenum型と非常によく似た使い方ができる
// let clothSize: 'small' | 'midium' | 'large' = 'large';

// const cloth: {
//     color: string;
//     size: 'small' | 'midium' | 'large'
// } = {
//     color: 'white',
//     size: 'midium'
// }

//enumとどっち使うのがいいの？
// 数が2-3のときはUnion型とLiteral型を組み合わせのがスッキリしててよい


/* typeエイリアスを使って複雑な型を変数のように扱う */

type clothSize = 'small' | 'midium' | 'large'
const cloth: {
    color: string;
    size: clothSize //ここで使える！
} = {
    color: 'white',
    size: 'midium'
}


/* 関数に型を適応させる方法 */

function add(num1: number, num2: number): number {
    return num1 + num2
}
//パラメータの後ろに戻り値の型をつける
// 型推論は？戻り値は効くが、引数は効かない
// 関数が複雑になった時に戻り値に型注釈してあると、わかりやすいからつけるべきである
add(3,2);


/* 関数の戻り値にvoid型を使う方法 */

function sayHello(): void {
    // console.log('Hello')
}

// console.log(sayHello());

// consoleの結果
// Hello
// undefined


/* 関数を使って、特定の関数のみを代入できる変数を作る */

const anotherAdd:(n1: number, n2: number)=> number  = add;
// const anotherAdd:(n1: number, n2: number)=> number  = function add(num1: number, num2: number): number {
//     return num1 + num2
// };
//無名関数にすることも可能

//アロー関数は？
// const doubleNumber = (number: number): number => number *2; //アロー関数なのに右側が長い！！
const doubleNumber: (num:number) => number = number => number *2; //左につけりゃいい


/* callback関数の型はこう書く */ //※理解浅いから要復習

function doubleAndHandle(num: number, cb: (num: number) => number): void {
    const doubleNum = cb(num * 2);
    // console.log(doubleNum);
}

doubleAndHandle(21, doubleNum => {
    return doubleNum
});


/* unKnown型を使って、柔軟でanyよりも厳しい型を使用する方法 */ //※理解浅いから要復習

let unKnownInput: unknown;
let anyInput: any;

unKnownInput = 'hello world';
unKnownInput = 21;
unKnownInput = true;
// unknown型はanyと同じくなんでも入れられる
// じゃあどこが違う？
let text: string;
// text = unKnownInput; //エラー出る
text = anyInput; //anyだとエラー出ないのに


/* never型を使って、起こり得ない値の方を使用する方法 */

function error(message: string): never {
    throw new Error(message);
}

console.log(error('aa'));

