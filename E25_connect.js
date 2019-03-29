const connect = require( "connect" );

//  connnect 本身是一个函数，返回一个中间件的控制器
let app = connect();

//  注册中间件
app.use( function( req,res,next ){
    console.log( "1" );
    next();
} );
//  中间件可以注册多个
app.use( (req,res,next) => {
    console.log(2);
    next();
} );

app.use( "/api",function(req,res,next){
    console.log( 4 );
    next();
} );

app.use( (err,req,res,next) => {
    //  错误处理的中间件
} );

app.use( (req,res) =>{
    res.write( "3" );
    console.log( 3 );
    res.end();
} );
app.listen( 58990,() => {
    console.log( "服务器监听端口58990成功 http://10.180.176.126:58990  " );
} );