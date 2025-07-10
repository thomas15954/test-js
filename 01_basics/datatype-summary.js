// primitive datatypes divide into 7 catogries
// 1. String, 2. Number, 3. Boolean, 6. null, 5. Undefined, 6. Symbol, 7. BigInt

const Score = 100
const score = 100.3

const isloggedIn = false
const outsideTemp = null

let useremail = undefined // or let usermeail;

const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id === anotherID);

const bigNumber = 547643468432416843241n

console.log(bigNumber);


// Non Primitive data types (reference type)

// 1. Array, 2. Objects, 3. Functions

const heros = ["waqar", "arbab", "sajjad"];
let myObj = {
    name: "waqar",
    age: 22,
}

const myFunstion = function(){
    console.log("Hello World");
    
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof myFunstion);
console.log(typeof heros);
console.log(typeof anotherID);