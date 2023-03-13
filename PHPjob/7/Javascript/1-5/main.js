//関数を定義
function createJuice(fruits) {
    console.log(fruits + 'を受け取りました。ジュースにして返します');
    return fruits + "ジュース";

}
//関数を呼び出す
let mikann = createJuice("みかん");
console.log (mikann + "が届きました");