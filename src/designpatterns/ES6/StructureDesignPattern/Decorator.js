// class Wrestler {
//     addStringToName(setName(name) {
//     this.name = name;
// })
// //how do I wrap this method in a higher order function?
// //obviously not like this, because it doesn't work
// //tell me, plzkthxbye
//
// sayName() {
//     console.log(this.name);
// }
// }
//
// const hulkHogan = new Wrestler();
// hulkHogan.setName('Hulk Hogan');
// hulkHogan.sayName(); //THIS SHIT DONT WORK M8

/*
Note: So this is the situation where decorators come in to the play and we can use decorator
to solve it.
 */

// function addStringToName(target, name, descriptor) {
//     const fn = descriptor.value;
//     //saving a reference to our decorated method so we can use it later
//
//     descriptor.value = wrestler => {
//         fn.call(target, wrestler + ' is a wrestler and he knows Jay');
//     };
//     //replacing the decorated method (descriptor.value)
//     //this new function executes our original function (fn), that's why we saved the reference
//     //this new function adds some functionality (concatenating the string)
//     //we do this using call(), because we want to apply the right context (target)
// }
//
// class DecoratorWrestler {
//     @addStringToName
//     setName(name) {
//         this.name = name;
//     }
//     //set the decorator and everything works!
//
//     sayName() {
//         console.log(this.name);
//     }
// }
//
// const w = new Wrestler();
// w.setName('Macho Man');
// w.sayName(); //Macho Man is a wrestler
// export {DecoratorWrestler};

@annotation
export class MyClass { }

function annotation(target) {
    target.annotated = true;
}