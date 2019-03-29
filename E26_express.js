//  安装express 
//  npm i -P express

//  引入express

// const express = require( "express" );

// //  express 完全兼容connect

// let app = express();

// app.use( function( req,res,next ){
//     console.log( "connect类似方法1" );
//     next();
// } );
// app.use( function( req,res,next ){
//     console.log( "connect类似方法2" );
//     next();
// } );
// app.use( function( req,res ){
//     console.log( "connect类似方法" );
//     res.write( "expresconnect" );
//     res.end();
// } );

// app.listen( 58888 );    //  http://172.16.25.108:58888

//=================================================================

const express = require( "express" );
const path = require( "path" );
//  express 完全兼容connect

let app = express();

//注册位移内置的中间件：static
app.use( express.static(path.join( __dirname,"/dist" )) );

app.get( "*",function( req,res,next ){
    console.log( req.param("id") );
    console.log( req.param( "name" ) );

    next();
} );
app.get( "/api",function( req,res ){
    console.log( "/api" );
    
    res.send( "124" );
    res.end();
} );

app.listen( 58888 ,() => {
    console.log( "  http://172.16.25.108:58888/api?id=111&name=222 " );
});