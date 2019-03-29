let add = function(a,b){
    return a + b;
}

console.log( add(4,5) );


let addArrowFun = (a,b) => a + b;
console.log( addArrowFun(5,6) );


var arr = [ 1,6,8,4,6,8,0 ];

// arr.sort( function(a,b){
//     return a - b;
// } );

// console.log( arr );

arr.sort( (a,b)=>a-b );
console.log( arr );

// var t = ()=>{
//     console.log(this);
// }