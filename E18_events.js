const EventEmitter = require( "events" );

// 给nodejs的进程增加未捕获异常的处理，防止程序崩溃
process.on('uncaughtException', (err) => {
    console.error('有错误');
  });


class DemoEE extends EventEmitter {
    constructor(opt){
        super(opt);
    }

    init(){
        console.log( "init..." );
        this.emit( "init","1234" );
    }

    close(){
        console.log( "close" );
        //  触发事件
        this.emit( "close" );
    }
}

let d = new DemoEE();
// d.emit('error', new Error('whoops!'));
// // 打印: 有错误




//  注册事件
d.on( "init",param => {
    console.log( "init 事件触发，参数是：", param );
} );

d.once( "close",() => {
    console.log( "close事件响应方法执行。。。" );
} );

d.init();   //  内部触发了init事件

d.close();  //  执行close方法，内部触发了close事件

