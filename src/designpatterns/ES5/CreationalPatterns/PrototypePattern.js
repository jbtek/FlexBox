/*
What is the prototype pattern?
Answer: This pattern is help to  create objects that can be used as blueprints(clone/copy) for any others object that are created by constructors.
It does this through what's called prototypal inheritance.

Benefits: It benefits to boost the performance against of creating class based object.
Why?
Because it creates all the methods and property as blueprints or same in all the created object.

The biggest benefit of using the pattern in JavaScript is the performance boost gained as opposed to object oriented classes.
This means that when you define functions inside an object, they will be created by reference. In other words, all child objects
will point to the same method instead of creating their own individual copies!
 */



/*
When objects are created through the constructor function and contains the name property, then further
 objects created with the same constructor function will also have this same property as shown below:
 */

function Movie(name) {
    this.name = name
}

const harryPotter = new Movie('Harry Potter')
const rushHour2 = new Movie('Rush Hour 2')
const fastAndFurious = new Movie('Fast And Furious')

console.log(harryPotter.constructor.name)
console.log(rushHour2.constructor.name)
console.log(fastAndFurious.constructor.name)

///The main disadvantage of above code is these all objects are creating different new brand object and creating same copy repeatedly,
// not creating the reference of object.
///So overcome on this kind of object-oriented class based objects, we need prototypal inheritance so we can
///stop creating its own different objects.

const Warrior = function(name) {
    this.name = name
    this.hp = 100
}

Warrior.prototype.bash = function(target) {
    target.hp -= 15
}

Warrior.prototype.omniSlash = function(target) {
    // The target's hp may not be under 50 or this attack will fail on the opponent
    if (target.hp < 50) {
        return
    }
    target.hp -= 50
}

const sam = new Warrior('Sam')
const lenardo = new Warrior('Lenardo')

sam.bash(lenardo)

console.log(sam.bash === lenardo.bash)

//Alternative way to create prototype object
const Warrior1 = function(name) {
    this.name = name
    this.hp = 100
}

Warrior1.prototype = {
    bash(target) {
        target.hp -= 15
    },
    omniSlash(target) {
        // The target's hp may not be under 50 or this attack will fail on the opponent
        if (target.hp < 50) {
            return
        }
        target.hp -= 50
    },
}

/*
In our code example above, we defined a warrior's attack methods by using Warrior.prototype.<method> = function() {...}.
You can see that we instantiated some warriors with the new keyword so now we are looking at two instances.
 Both instances set their name property according to the name argument that was passed in by the caller.

When we defined the methods bash and omniSlash on the prototype as demonstrated,
the two separate instances we're looking at are actually referencing the same bash and omniSlash functions!
 */

//If we create Warrior like this it will create different objects and not point to same property and methods.

const Warrior = function(name) {
    this.name = name
    this.hp = 100

    this.bash = function(target) {
        target.hp -= 15
    }

    this.omniSlash = function(target) {
        // The target's hp may not be under 50 or this attack will fail on the opponent
        if (target.hp < 50) {
            return
        }
        target.hp -= 50
    }
}

const sam = new Warrior('Sam')
const lenardo = new Warrior('Lenardo')

console.log(sam.bash === lenardo.bash) // false
