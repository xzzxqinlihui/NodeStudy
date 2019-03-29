const fs = require( "fs" );
const path = require( "path" );

let srcFile = path.join( __dirname,"a.txt" );
let distFile = path.join( __dirname,"b.txt" );

let rs = fs.createReadStream( srcFile );
let ws = fs.createWriteStream( distFile );

rs.on( "open",function(fd){
    console.log( "文件开始读取" );
} );

rs.on( "close",function(){
    console.log( "文件读取结束" );
} );

rs.pipe( ws );