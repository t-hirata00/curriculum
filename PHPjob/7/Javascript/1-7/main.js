//Humanクラスを作成
class Taiyaki{
    // コンストラクタ
    constructor(nakami){
        this.nakami = nakami;
    }

    gu(){
        console.log(`中身は${this.nakami}です`);
    }
}

let anko = new Taiyaki("あんこ");
anko.gu();

let kurimu = new Taiyaki("クリーム");
kurimu.gu();

let tizu = new Taiyaki("チーズ");
tizu.gu();