//Singleton Pattern
/**
 * Singleton is a special creational design pattern in which only one instance of a class can exist.
 * It works like this — if no instance
 * of the singleton class exists then a new instance is created and returned, but if an instance already exists,
 * then the reference to the existing instance is returned.
 A perfect real-life example would be that of mongoose (the famous Node.js ODM library for MongoDB).
 It utilizes the singleton pattern.
 In this example, we have a Database class that is a singleton.
 First, we create an object mongo by using the new operator to
 invoke the Database class constructor.
 This time an object is instantiated because none already exists.
 The second time, when we create the mysql object, no new object
 is instantiated but instead,
 the reference to the object that was instantiated earlier, i.e.
 the mongo object, is returned.
 */

const Singleton = (function () {
    let instance;

    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

alert("Same instance? " + (instance1 === instance2));
export {Singleton}

//Another way of creating singleton pattern
const mySingleton = (function () {

    // Instance stores a reference to the Singleton
    let instance;

    function init() {

        // Singleton

        // Private methods and variables
        function privateMethod(){
            console.log( "I am private" );
        }

        let privateVariable = "Im also private";

        let privateRandomNumber = Math.random();

        return {

            // Public methods and variables
            publicMethod: function () {
                console.log( "The public can see me!" );
            },

            publicProperty: "I am also public",

            getRandomNumber: function() {
                return privateRandomNumber;
            }

        };

    };

    return {

        // Get the Singleton instance if one exists
        // or create one if it doesn't
        getInstance: function () {

            if ( !instance ) {
                instance = init();
            }

            return instance;
        }

    };

})();

