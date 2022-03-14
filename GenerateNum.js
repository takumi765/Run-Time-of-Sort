//ランダムに指定した数のデータを生成します
const fs = require('fs');

//the number of data(if you want,please change here)
const count = 25000;

try{
    const file = fs.openSync("./data.txt","w");
    fs.writeSync(file,String(Math.floor(Math.random()*1000/1)));
    for(var i=0;i<count-1;i++){
        //console.log(Math.floor(Math.random()*1000)/1);
        fs.writeSync(file,"\n"+String(Math.floor(Math.random()*1000/1)));
    }
}
catch(e){
    console.log(e.message);
}

console.log("complete!");