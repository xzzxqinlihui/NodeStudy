/*
 * @Author: qinlihui
 * @Date: 2018-12-26 18:31:19 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-12-27 09:02:30
 */
// //  用http创建一个web服务器端
// const http = require( "http" );

// //  创建一个http的服务器端对象
// let server = http.createServer();
// //  监听客户端的请求数据和发送响应报文
// server.on( "request",(req,res) => {
//     //  req:请求报文的封装
//     console.log( req.headers );
//     console.log( req.url );
//     console.log( req.method );  //  打印请求的方法  get post

//     res.write( "hi,aicoder.com" );
//     res.end();
// } );



// //  让服务器对象开始监听
//  server.listen( 58889,() => {
//      console.log( "服务器端开始监听端口：58889，可以用浏览器打开  http://10.180.84.24:58889" );
//  } );

 //============================================================================================
 //  用http创建一个web服务器端
const http = require( "http" );
const path = require( "path" );
const fs =require( "fs" );

//  创建一个http的服务器端对象
let server = http.createServer();
//  监听客户端的请求数据和发送响应报文
server.on( "request",(req,res) => {

    let conType = "text/plain";

    //   url 全路径
    let fileName = path.join( __dirname,"dist/",req.url );

    switch( path.extname(fileName) ){
        case ".png":
            conType = "image/png";
            break;
        case ".jpg":
        case ".jpeg":
            conType = "image/jpeg";
            break;
        case ".gif":
            conType = "image/gif";
            break;
        case ".html":
            conType = "text/html";
            break;
        case ".css":
            conType = "text/css";
            break;
        // case ".js":
        //     conType = "application/x-javascript";
        //     break;
        default:
            conType = "text/plain";
            
    }

    //  设置响应的类型和状态码
    res.writeHeader(200,{
        "Content-Type":conType,
    });
    
   let reader = fs.createReadStream( fileName );

   reader.pipe( res );
} );

//  让服务器对象开始监听
 server.listen( 58889,() => {
     console.log( "服务器端开始监听端口：58889，可以用浏览器打开  http://10.180.84.24:58889   " );
 } );