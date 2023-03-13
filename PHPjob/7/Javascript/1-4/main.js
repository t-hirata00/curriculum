//チャレンジ問題
//Q1
let x;
let y;

for(x = 1; x <= 100; x++){
    if(x % 3 ==0 && x % 5 ==0){
        y ="FizzBuzz!!";
        console.log(y);
    }else if(x % 3 ==0){
        y ="Fizz!";
        console.log(y);
    } else if(x % 5 ==0){
        y ="Buzz!";
        console.log(y);
    }else {
        console.log(x);
    }
}