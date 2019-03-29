//  引入path模块
const path = require( "path" );
//  const   声明变量，变量的值不能改变
//  第一种情况：简单类型  string  number boolean 等这些简单类型值不能改的
const t = 123; //   t 永远只能是123 不能改值
// 第二种情况 复杂类型   const 定义的复杂类型 地址引用不能改

var strPath1 = "/home/aicoder/com/index.html";
var strPath2 = "c:\\aicoder\\com\\index2.html";

console.log( path.basename(strPath1) ); //=>index.html
console.log( path.basename(strPath2) ); //=>index2.html

console.log( path.basename(strPath1,".html") ); //=>index

console.log( path.delimiter );  //=> window下是;  linux是：
console.log( path.posix.delimiter );  //=> window下是;  linux是：
console.log( path.win32.delimiter );  //=> window下是;  linux是：

console.log( path.dirname(strPath2) );  //=>c:\aicoder\com

console.log(__filename);        //=>F:\VSCODE\D9Nodejs\E04_path.js
console.log(path.dirname(__filename));           //=>F:\VSCODE\D9Nodejs

console.log( path.extname("a.html") );  //=>.html
console.log( path.extname(strPath2) );  //=>.html

console.log( path.join( "/","home/aicoder","index.html" ) );    //=>\home\aicoder\index.html

console.log( path.parse(strPath1) );    //=>{ root: '/',dir: '/home/aicoder/com',base: 'index.html',ext: '.html',name: 'index' }





