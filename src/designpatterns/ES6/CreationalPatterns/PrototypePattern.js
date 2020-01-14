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

//above is equivalant to this in es5
/*const PrototypePattern = function (id, x, y) {
    this.id = id;
    this.move(x, y);
};
PrototypePattern.prototype.move = function (x, y) {
    this.x = x;
    this.y = y;
};*/