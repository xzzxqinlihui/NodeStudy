//  路径配置不知道为什么都不行  但是将juqery.js放到web文件下就可以了
// require.config({
//     baseUrl: 'js',
//     paths:{
//       jqurey: '../lib/jquery-1.12.4.min',
//       show:"./show.js"
//      }
//   });

//如果依赖的模块不在当前的目录下，那么需要 进行require的config配置路径的映射
define(['jquery',"show"], function($,show) {
    'use strict';
    $(function(){
        $("#box").html( "<h1>这是我们第一个rj的应用</h1>" );
        show.do();
    });
}); 