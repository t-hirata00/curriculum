
//問1
let number = [2,5,12,13,15,18,22];
function isEven(array1){
    for(let i = 0;i < array1.length; i++)
    if(i % 2 === 0){
        console.log(array1[i] + '偶数です');
    }
    
}

console.log(isEven(number));

//問2

class Car{
    //コンストラクタ
    constructor(gass,number){
        this.gass = gass;
        this.number = number;
    }

    getNumGas(){
        console.log(`ガソリンは${this.gass}です。ナンバーは${this.number}です`);
    }
}

let test = new Car(180,45452);

test.getNumGas();