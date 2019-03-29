const fs = require( "fs" );
const path = require( "path" );

let  fileName = path.join( __dirname,"index.js" );

//  创建一个可读的流
let stream = fs.createReadStream( fileName );

//  当管道的管理建立后，并打开的时候，触发 open事件
stream.on( "open",function( fd ){
    console.log( "管道 建立，并打开:fd",fd );
} );

let i = 0;
//  当数据溜过来，直接触发data事件
stream.on( "data",function( trunk ){
    console.log( "编号%d",i,trunk );
    i++;
} );

stream.on( "end",function(){
    console.log( "数据读取完毕" );
} );