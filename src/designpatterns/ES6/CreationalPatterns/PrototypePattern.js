class PrototypePattern {
    constructor (id, x, y) {
        this.id = id
        this.move(x, y);
    }
    move (x, y) {
        this.x = x
        this.y = y
    }
}

PrototypePattern.prototype.z = function (value) {

}

//prototype can be availble in only constructor object.
// var abc = {
//     x:1
// }
//
// abc.y = 2;
// abc.name = 'jay'
// console.log('abc.name::', abc.name);

// var abc  = Object.create({});
// abc.prototype.name1 = 'jay'
// abc.prototype.age =  function (value) {
//
// }
// var a1 = new abc();
// var abc =  new Object();
//above is equivalant to this in es5
/*const PrototypePattern = function (id, x, y) {
    this.id = id;
    this.move(x, y);
};
PrototypePattern.prototype.move = function (x, y) {
    this.x = x;
    this.y = y;
};*/