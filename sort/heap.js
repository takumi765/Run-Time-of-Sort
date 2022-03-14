//ヒープ構造を作る関数
function downheap(data,from,to){
    var val = data[from];
    var i=from;

    while(i<=Math.floor(to/2)){
        j=i*2;
        if(j+1<=to && data[j]<data[j+1]){
            j++;
        }
        if(val>=data[j]){
            break;
        }
        data[i]=data[j];
        i=j;
    }
    data[i]=val;
}

module.exports.heap=async function(data){
    //ヒープソートのため1番目の要素から始めるようにする
    data.unshift(null);
    var half=Math.floor((data.length-1)/2);

    //ヒープ構造を作る
    for(var i=half;i>=1;i--){
        downheap(data,i,data.length-1);
    }

    for(i=data.length-1;i>=2;i--){
        var root=data[1];
        data[1]=data[i];
        data[i]=root;
        downheap(data,1,i-1);
    }

    //確認用
    //console.log(data);
}