//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100  //number
const scoreValue = 100.3 //numnber dt

const isLoggedIn = false //boolean dt
const outsideTemp = null //object dt
let userEmail;  //undefined dt

const id = Symbol('123')
const anotherId = Symbol('123') //symbol dt

// console.log(id === anotherId);

const bigNumber = 3456543576654356754n  //bigint



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){   //function
    console.log("Hello world");
}

console.log(typeof heros)


