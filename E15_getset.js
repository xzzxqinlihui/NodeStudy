function Stu( name ) {
    this._name = name;
}

Stu.prototype = {
    constructor:Stu,
    //  这是一个属性
    get Name() {
        return this._name;
    },
    set Name(val) {
        if(val) {
            this._name = val;
        }
    }
};

var s = new Stu( "laoma" );
console.log( s.Name );
//  s._name
s.Name = "sss";
console.log( s.Name );

s.Name = "";
console.log( s.Name );