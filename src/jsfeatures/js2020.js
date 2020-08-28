//nullish coalescing (??), optional chaining (?.) and dynamic import()
const person = {
    address:'',
    city:'',
    isCloseTo:function () {

    },
    sayHayUsing:function () {

    },
    fullName:''
}
const name = person.fullName ?? "Anonymous";
console.log(`Hello, ${name}!`);
const element = { index: 0, value: "foo" };

const index = element.index ?? -1; //  0 :D
const index = element.index || -1; // -1 :(


const city = person.address?.city; // person.address could be not defined
const isNeighbor = person.address?.isCloseTo(me);

person.sayHayUsing?.("Twitter"); // The person.sayHayUsing method could be not defined