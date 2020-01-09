/*
Factory Pattern
Factory pattern is another class-based creational pattern. In this, we provide a generic interface that delegates
the responsibility of object instantiation to its subclasses.
In this example, we create a factory class named BallFactory that has a method that
takes in parameters, and, depending on the parameters, it delegates the
object instantiation responsibility to the respective class.
If the type parameter is "football" or "soccer" object instantiation is handled
by Football class, but if it is "basketball" object instantiation is handled by Basketball class.
 */

/*Use Case: =>
This pattern is frequently used when we need to manage or
manipulate collections of objects that are different yet have many
similar characteristics.*/

//This create an instance of subclass behalf of type
class BallFactory {
    constructor() {
        this.createBall = function(type) {
            let ball;
            if (type === 'football' || type === 'soccer') ball = new Football();
            else if (type === 'basketball') ball = new Basketball();
            ball.roll = function() {
                return `The ${this._type} is rolling.`;
            };

            return ball;
        };
    }
}

class Football {
    constructor() {
        this._type = 'football';
        this.kick = function() {
            return 'You kicked the football.';
        };
    }
}

class Basketball {
    constructor() {
        this._type = 'basketball';
        this.bounce = function() {
            return 'You bounced the basketball.';
        };
    }
}


// creating objects
const factory = new BallFactory();

const myFootball = factory.createBall('football');
const myBasketball = factory.createBall('basketball');
console.log('--------ES6--------');
console.log(myFootball.roll()); // The football is rolling.
console.log(myBasketball.roll()); // The basketball is rolling.
console.log(myFootball.kick()); // You kicked the football.
console.log(myBasketball.bounce()); // You bounced the basketball.