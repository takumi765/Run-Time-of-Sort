async function merge(data,l,r){
    if(l>=r){
        return;
    }

    //スコープの違い注意
    let mid=Math.floor((l+r)/2);
    merge(data,l,mid);
    merge(data,mid+1,r);

    var tmp = data.slice(l,mid+1);
    for(var j=r;j>mid;j--){
        tmp=tmp.concat(data.slice(j,j+1));
    }

    i=l;j=r;
    for(var k=l;k<=r;k++){
        if(tmp[i-l]<=tmp[j-l]){
            data[k]=tmp[i-l];
            i++;
        }else{
            data[k]=tmp[j-l];
            j--;
        }
    }
}

//配列版マージソート
module.exports.merge_array=async function (data){
    merge(data,0,data.length-1);
    //確認用
    //.then(console.log(data));
}