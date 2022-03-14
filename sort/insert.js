//挿入ソートを行う関数
module.exports.insert= async function (data){
    for(var i=1;i<data.length;i++){
        var j=i;
        while(j>0){
            if(data[j-1]>data[j]){
                var tmp=data[j];
                data[j]=data[j-1];
                data[j-1]=tmp;
            }else{
                break;
            }
            j--;
        }
    }
    //確認用
    //console.log(data);
}