const net = require( "net" );

//  创建服务器对象
let server = net.createServer();

server.on( "connection",client => {
    //  client是指向客户端的一个对象，可以通过它给客户端发送数据，可写流，可以写入数据，也可以是一个可读流
    //  所以可以进行读取数据

    client.on( "data",trunk => {
        console.log( trunk.toLocaleString("utf8") );
    });

    //  往客户端写入数据
    client.write( "你好啊！来自服务器端" );
    client.end( "结束链接" );
} );

//  开始监听端口
server.listen( 58888 );