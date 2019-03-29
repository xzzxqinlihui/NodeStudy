//  第一种  引入内置的模块
//  内置模块
const path = require( "path" );
//  const  是定义一个常量，如果是简单类型，那么值不能修改
//  const   声明的是一个引用类型，那么这个变量指向的内存地址不变

//  join方法可以帮我们把多个路径链接在 一起
var t = path.join( __dirname,__filename );

console.log( t );

//  第二种  引入文件模块（相对路径和绝对路径都可以）
//  文件的后缀可以加，也可以不加，但是推荐大家加上
//  如果文件不加后缀，尝试  .js  .node  .json 
const math = require( "./E02_math.js" );
console.log( math.add( 9,10 ) );

//  引入绝对路径的形式
const math2 = require( "F:/VSCODE/D9Nodejs/E02_math.js" );
console.log( math2.add( 9,9 ) );


//  第三种  引入文件夹模块  （尽量少用）
//  首先到根目录的package.json中去找main的配置节点
const m = require( "./" );
m.show();

const n = require( "./tm" );
n.myShow();

//  自定义模块
const stringW = require( "string-width" );
var num = stringW( "我是laoma" );
console.log( num );
console.log( module.paths );