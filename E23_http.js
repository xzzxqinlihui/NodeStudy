const http = require( "http" );

//  当发生request请求事件的时候，自动调用回调函数
http.createServer( function( req,res ){
    //  req  监听数据
    // req.on( "data",function( trunk ){

    // } );

    console.log( req.headers );
    console.log( req.url );
    console.log( req.method );

    res.write( "1234567" );
    res.end();

} ).listen( 58990,() => {
    console.log( "服务器监听端口58990成功 http://10.180.176.126:58990  " );
} );