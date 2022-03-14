//選択ソートを行う関数
module.exports.select= async function (data){
    for(var i=0;i<data.length-1;i++){
        var lower=data[i];
        var low=i;
        for(var j=i+1;j<data.length;j++){
            if(lower>data[j]){
                lower=data[j];
                low=j;
            }
        }
        data[low]=data[i];
        data[i]=lower;
    }
    //確認用
    //console.log(data);
}