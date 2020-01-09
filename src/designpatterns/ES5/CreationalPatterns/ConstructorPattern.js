/**
 * Constructor pattern: this is basically used to create instance of object in javascript.
 */
export const constructorPattern = function(name, address){
    this.name = name;
    this.address = address;
    this.showName = () =>{
        console.log(this.name + '::', this.address);
    }
};
const obj = new constructorPattern('Jay Kushwaha', 'TUGLAKABAD');
obj.showName();