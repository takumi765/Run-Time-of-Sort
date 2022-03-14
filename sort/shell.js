//シェルソート
module.exports.shell=async function (data){
    for(var h=1;h<Math.floor(data.length/9);h=h*3+1){
        ;//Math.floor(data.length/9)以上の数字を用いてもほとんど整列できない
    }
    for(;h>0;h=Math.floor(h/3)){
        for(var i=h;i<data.length;i++){
            var j=i;
            while(j>=h && data[j]<data[j-h]){
                var tmp=data[j];
                data[j]=data[j-h];
                data[j-h]=tmp;
                j-=h;
            }
        }
    }
    //確認用
    //console.log(data);
}