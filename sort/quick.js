//渡された範囲内で分割統治を行う関数
module.exports.partition=function (a,l,r){
    var i,j,piv,t;
    i=l-1;
    j=r;
    piv = a[r];

    while(1){
        while(a[++i]<piv){
            ;//ピボットより小さいときは、ただiを増やす
        }
        while(i<--j && a[j]>=piv){
            ;//jがiより大きいかつa[j]がピボット以上のときは、jを減らす
        }
        //jがiよりも左に来た時
        if(i>=j){
            break;
        }
        t=a[i];
        a[i]=a[j];
        a[j]=t;
    }
    a[r]=a[i];
    a[i]=piv;
    return i;
}

const partition=this.partition;

//非再帰版クイックソートを行う関数
module.exports.quick=async function (data){
    var l,r,pivot;
    var low = new Array(30), high = new Array(30);
    var sp;

    low[0]=0;
    high[0]=data.length-1;
    sp=1;

    while(sp>0){
        sp--;
        l=low[sp];
        r=high[sp];

        if(l>=r){
            ;//何もしない
        }else{
            pivot = partition(data,l,r);

            if(r-pivot>pivot-l){
                low[sp]=pivot+1;
                high[sp++]=r;
                low[sp]=l;
                high[sp++]=pivot-1;
            }else{
                low[sp]=l
                high[sp++]=pivot-1;
                low[sp]=pivot+1;
                high[sp++]=r;
            }
        }
    }
    //確認用
    //console.log(data);
}