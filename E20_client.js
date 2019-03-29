const net = require( "net" );

//  client  客户端链接服务器端的对象
let client = net.connect( 58888,"172.16.25.108",() => {
    console.log( "连接上了服务器" );
} );

client.on( "data",trunk => {
    console.log( trunk.toString("utf8") );
} );

client.write( "老马  aicodercom from 客户端" );
client.end();