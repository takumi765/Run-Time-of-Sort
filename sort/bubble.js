//バブルソートを行う関数
module.exports.bubble=async function (data){
    for(var i=0;i<data.length-1;i++){
        for(var j=data.length-1;j>i;j--){
            if(data[j]<data[j-1]){
                var tmp=data[j-1];
                data[j-1]=data[j];
                data[j]=tmp;
            }
        }
    }
    //確認用
    //console.log(data);
}