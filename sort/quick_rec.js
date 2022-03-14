const partition = require("./quick").partition;

//再帰処理用
function quick_rec1(data,l,r){
    var piv;
    //要素が一つの時
    if(l>=r){
        return;
    }

    piv=partition(data,l,r);
    
    //前半部分を再帰処理
    quick_rec1(data,l,piv-1);
    //後半部分を再帰処理
    quick_rec1(data,piv+1,r);
}

//再帰版クイックソートを行う関数
module.exports.quick_rec = async function (data){
    quick_rec1(data,0,data.length-1);
    //確認用
    //console.log(data);
}
