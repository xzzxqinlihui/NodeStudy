'use strict';

const EventEmitter = require('events');

class Application extends EventEmitter {
  constructor(opt) {
    super(opt);
    this.on('error', err => {
      console.log('应用程序出错了！');
    });
  }

  init() {
    // 触发预初始化事件
    this.emit('preInit');

    // ... 默认的初始化代码

    // 初始化事件
    this.emit('init');
  }

  start() {
    // 初始化服务器
    this.init();
  }

}

/**/
var app = new Application();
app.on('init', () => {
  console.log('初始化！');
});
app.on('preInit', () => {
  console.log('pre init');
});
app.start();

// 作者：IT老马
// 链接：https://www.jianshu.com/p/04828ce40e80
// 來源：简书
// 简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。