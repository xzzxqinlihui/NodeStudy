// const fs = require("fs");

// //  启动监听
// let watcher = fs.watch( __dirname );

// //  监听改变的事件
// watcher.on( "change",function( eventType,fileName ){
//     console.log( "change",eventType,fileName );
// } );

// //  关闭监听
// setTimeout( function(){
//     //  实际：关闭监听
//     watcher.close();
// },10000 );


//======================================================

const fs = require("fs");

//  启动监听
let watcher = fs.watch( __dirname,function(eventType,fileName){
    console.log( "callback:",eventType,fileName );
} );

//  关闭监听
setTimeout( function(){
    //  实际：关闭监听
    watcher.close();
},10000 );

