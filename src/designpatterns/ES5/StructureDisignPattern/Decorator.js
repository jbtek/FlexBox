const decorator = (function () {
    /**
     * target: this is the class or function on that we apply the decorator
     * name: this is the name of class or function on that we apply the decorator
     * descriptor: this is the object
     * @log()
      @immutable()
       class Example {
          @time('demo')
          doSomething() {
            //
          }
        }
     */
    // function addStringToName(fn) {
    //     return function(name) {
    //         const wrestleString = name + ' is a wrestler';
    //         fn(wrestleString);
    //     }
    // }
    //
    // function sayName(name) {
    //     console.log(name);
    // }
    //
    // const wrestler = addStringToName(sayName);
    // wrestler('Hulk Hogan'); //output: Hulk Hogan is a wrestler


    function addStringToName(fn) {
        console.log('this above::', name);
        return function(name) {
            //this function gets returned when addStringToName is used to wrap a method

            const wrestleString = name + ' is a wrestler';
            //concat the string
            console.log('this:::', this);
            fn.call(this, wrestleString);
            //call the passed function with the modified string and right context
        }
    }

    function Wrestler() {}
//create Object

    Wrestler.prototype.setName = addStringToName(function(name) {
        this.name = name;
    });
//wrap the the setName function in our higher order function addStringToName (decorate it!)

    Wrestler.prototype.sayName = function() {
        console.log(this.name);
    };

    const hulkHogan = new Wrestler();
    hulkHogan.setName('Hulk Hogan');
    hulkHogan.sayName(); //Hulk Hogan is a wrestler
})();
export {decorator}