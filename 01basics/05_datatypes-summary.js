// Primitive----7 types (call by value)

//--->String,Number,Boolean,null,undefined,Symbol,BigInt

const score = 100
const scoreVlaue = 100.1

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id==anotherId)
const bigNumber = 57352n


//Reference type(Non-Primitive)

//Array,Objects,Functions
const heros = ["shktiman","naagraj","doga"];
let myObj = {
    name: "Rishabh",
    age: 22,

}

const myFunction = function(){
    //console.log("Hello world");
}

//console.log(typeof myFunction)
//console.log(typeof bigNumber)



//+++++++++++++++++++++++++++++++++++++++++
// stack (primitive), Heap (non-primitive).

let myname = "Rishabh Agnihotri"
let anothername= "Agni rishabh"

console.log(anothername);
console.log(myname);

let userOne = {
    email: "rishabhagni68107",
    mail: "userOne@ybl"
}
let userTwo = userOne
userTwo.email = "rishabh23"
console.log(userOne.email)
console.log(userTwo.email) 