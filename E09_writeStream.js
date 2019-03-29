const fs = require("fs");
const path = require("path");

//  要用可写流，往a.txt文件中写入字符串
let aFileName = path.join(__dirname, "a.txt");

let stream = fs.createWriteStream(aFileName, { flags: "a" });

stream.on( "open",function(fd){
    console.log( "可写流打开:",fd );
} );

stream.on( "close",function(){
    console.log( "可写流关闭！" );
} );

//  往可写流里面写入数据
for( let i = 0; i < 100;i++ ){
    stream.write( i + "aicoder.com 全栈实习\r\n" );
}

//调用end方法，结束可写流
stream.end( "结尾！" );