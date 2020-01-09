/**
 * Constructor pattern: this is basically used to create instance of object in javascript.
 */
export class ConstructorPattern {
    constructor(name,address){
        this.name = name;
        this.address = address;
    }

    showName = () =>{
       console.log(this.name + ':::' + this.address);
    }
}

let obj = new ConstructorPattern('Jaychandra', 'Badarpur');
obj.showName();