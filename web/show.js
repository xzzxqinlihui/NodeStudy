define([
    'jquery'
], function($) {
    'use strict';
    return {
        do:function(){
            console.log( "我是show模块" );
            $(document.body).append("<div>我是动态生成的</div>");
        }
    }
});