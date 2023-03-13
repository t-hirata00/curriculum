let name = "hoge";
console.log(name);

name = "uge";
console.log(name);

let name2 = "池田";
console.log(name2 + "くん");
let number = 10;
console.log(number * 3);

console.log(`${name2}くんは${number}月生まれです`);

let price = 100;
console.log(price * 2);

price = 500;
console.log(price * 2);

let num1 = 10;
let num2 = 4;
let result;
//足し算
result = num1 + num2;
console.log(result);
//引き算
result = num1 - num2;
console.log(result);
//掛け算
result = num1 * num2;
console.log(result);
//割り算
result = num1 / num2;
console.log(result);
//剰余
result = num1 % num2;
console.log(result);

console.log('Hello ' + 'World');
//変数の結合の例
let lastName = '田中';
let firstName = '一郎';
let fullName = lastName + firstName;

console.log(fullName);

let x = 10;
x++;
console.log(x);  //11
let y = 10;
y--;
console.log(y);  //9

console.log(10 === 10); //true        「両辺が等しい」という条件 → 正しいのでtrue
console.log(10 === 5); //false        「両辺が等しい」という条件 → 正しくないのでfalse
console.log(10 !== 5); //true        「10と5は等しくない」という条件 → 正しいので true
console.log(10 > 20); //false        「10と20を比べて、10の方が大きい」という条件 → 正しくないのでfalse
console.log(10 <= 10); //true        「左辺の10は右辺の10という値以上か」という条件 → 正しいのでtrue

console.log('10' === 10); //false
console.log('10' == 10); //true