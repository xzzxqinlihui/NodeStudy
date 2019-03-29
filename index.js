// module.exports = {};
//  第一种写法
exports.show = function(){
    console.log( "index.js show!" );
};

// module.exports === exports
//  第二种写法
// module.exports = {
//     myShow:function(){
//         console.log( "tm : myShow!" );
//     },
// };