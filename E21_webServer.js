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
    client.write( `HTTP/1.1 200 OK
Content-Type: text/html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>requirejs实现amd标准应用</title>
</head>
<body>
    <h1>这里是来自服务器的内容</h1>
</body>
</html>
` );
    client.end(  );
} );

//  开始监听端口
server.listen( 58888 ,() => {
    console.log( "服务器开始监听58888....." );
});