const fs = require("fs");

const bubble = require("./sort/bubble").bubble;
const select = require("./sort/select").select;
const insert = require("./sort/insert").insert;
const quick = require("./sort/quick").quick;
const quick_rec = require("./sort/quick_rec").quick_rec;
const shell = require("./sort/shell").shell;
const merge_array = require("./sort/merge_array").merge_array;
const merge_list = require("./sort/merge_list").merge_list;
const heap = require("./sort/heap").heap;

//各ソートの時間を測る関数
function sort(type,input){
    var data = input.split("\n");//整列する文字列を一つずつ分割する
    //全てのデータを数字に変換する
    for(var i=0;i<data.length;i++){
        data[i]=parseInt(data[i]);
    }

    var time1,time2;
    //非再帰版クイックソート
    if(type===0){
        time1 = Date.now();
        quick(data)
        .then (time2 = Date.now());
        console.log("Quicksort:"+(time2-time1)+"ms");
    }
    //再帰版クイックソート
    if(type===1){
        time1 = Date.now();
        quick_rec(data)
        .then(time2=Date.now());
        console.log("Quicksort_Rec:"+(time2-time1)+"ms");
    }
    //バブルソート
    if(type===2){
        time1 = Date.now();
        bubble(data)
        .then(time2=Date.now());
        console.log("Bubblesort:"+(time2-time1)+"ms");
    }
    //選択ソート
    if(type===3){
        time1 = Date.now();
        select(data)
        .then(time2=Date.now());
        console.log("Selectionsort:"+(time2-time1)+"ms");
    }
    //挿入ソート
    if(type===4){
        time1 = Date.now();
        insert(data)
        .then(time2=Date.now());
        console.log("Insertsort:"+(time2-time1)+"ms");
    }
    //シェルソート
    if(type===5){
        time1 = Date.now();
        shell(data)
        .then(time2=Date.now());
        console.log("Shellsort:"+(time2-time1)+"ms");
    }
    //配列版マージソート
    if(type===6){
        time1 = Date.now();
        merge_array(data)
        .then(time2=Date.now());
        console.log("Mergesort_Array:"+(time2-time1)+"ms");
    }
    //連結リスト版マージソート
    if(type===7){
        time1 = Date.now();
        merge_list(data)
        .then(time2=Date.now());
        console.log("Mergesort_List:"+(time2-time1)+"ms");
    }
    //ヒープソート
    if(type===8){
        time1 = Date.now();
        heap(data)
        .then(time2=Date.now());
        console.log("Heapsort:"+(time2-time1)+"ms");
    }
}

sort(0,fs.readFileSync("./data.txt","utf8"));//非再帰版クイックソート
sort(1,fs.readFileSync("./data.txt","utf8"));//再帰版クイックソート
sort(2,fs.readFileSync("./data.txt","utf8"));//バブルソート
sort(3,fs.readFileSync("./data.txt","utf8"));//選択ソート
sort(4,fs.readFileSync("./data.txt","utf8"));//挿入ソート
sort(5,fs.readFileSync("./data.txt","utf8"));//シェルソート
sort(6,fs.readFileSync("./data.txt","utf8"));//配列版マージソート
sort(7,fs.readFileSync("./data.txt","utf8"));//リスト版マージソート
sort(8,fs.readFileSync("./data.txt","utf8"));//ヒープソート
