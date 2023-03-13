let num = [10,15,20,25];
console.log(num);

for(let i = 0; i < num.length; i++){
    if(num[i] % 2 === 0){
        console.log(num[i] + "は偶数です");
    }
}

let car = {
    gass:20.5,
    number:1234,
}

console.log(car);
console.log("ガソリンは" + car.gass);
console.log("ナンバーは" + car['number']);