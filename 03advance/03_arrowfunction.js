// this keyword,arrow functions.
//this refers to the current context in the objects.
const user = {
    username: "Rishabh",
    Price: 999,
     welcomeMessage: function(){
        console.log(`${this.username}, welcome to website `);
        console.log(this);
     }
     
}

//user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this)
// //in node this is empty object
// in browser this is window object 

// function one(){
//     let uername = "Rishabh"
//     console.log(this.username)//we cannot access through this in functions
// }
// one()
//++++++arrow function +++++

const one = () => {
    let username = "Rishabh"
    console.log(username)
}
//one()

// const addtwo = (num1,num2) => {
//     return num1 + num2
// }
//const addtwo = (num1,num2) => num1 + num2
//const addtwo = (num1,num2) => (num1 + num2)

const addtwo = (num1,num2) => ({username: "Rishabh"})

console.log(addtwo(3,4))

