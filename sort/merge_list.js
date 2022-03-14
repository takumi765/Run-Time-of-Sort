//連結リストの要素
class Node{
    constructor(value,next=null){
        this.value=value;
        this.next=next;
    }
}

//連結リスト
class List{
    constructor(){
        this.head=null;
    }
    //末尾に要素を追加する
    push(value){
        const node=new Node(value);

        //挿入する場所がnullの時
        if(!this.head){
            this.head=node;
            return;
        }
        //そうでない時はnullになるまで進む
        let current = this.head;
        while(current.next){
            current=current.next;
        }
        current.next=node;
    }
}

//マージソートをする関数
function merge(a,b){
    let L=new Node();

    let l=L;
    while(a!=null && b!=null){
        if(a.value<=b.value){
            L.next=a;
            L=a;
            a=a.next;
        }else{
            L.next=b;
            L=b;
            b=b.next;
        }
    }
    if(a!=null){
        L.next=a;
    }else{
        L.next=b;
    }

    return l.next;
}

//中間地点を求める関数
function merge_mid(list){
    if(list===null || list.next===null){
        return list;
    }
    
    //中間地点を見つけるため、bはaの二倍進むようにする
    let a=list;
    let b=a.next;
        b=b.next;
    while(b!=null){
        a=a.next;
        b=b.next;
        if(b!=null){
            b=b.next;
        }
    }
    let p=a.next;
    a.next=null;

    return merge(merge_mid(list),merge_mid(p));
}

//リスト構造に変換する
module.exports.merge_list=async function(data){
    let list = new List();
    for(var i=0;i<data.length;i++){
        list.push(data[i]);
    }
/* 
    list.head=merge_mid(list.head);

    //確認用
    let node=list.head;
    for(var i=0;i<data.length;i++){
        process.stdout.write(String(node.value)+" ");
        node=node.next;
    } */
}