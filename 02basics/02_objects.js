//sigleton
//const JsUser = new object()
//objects.create

//objects literals
//const JsUser = {}

const mySym = Symbol("key1")
const JsUser = {
    name: "Rishabh",
    [mySym]: "mykey1",
    age: 21,
    loation: "Bhopal",
    email: "rishabhagni@.com",
    isLoggedIn: false,
    lastLoggedinDays: ["Monday","Saturday"],
    "full name": "rishbh agni"
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym])

JsUser.email = "Rishabh@.com"
//Object.freeze(JsUser)
JsUser.email = "Rishu@31.com"
//console.log(JsUser);

//functions in objects

JsUser.greeting = function(){
    //console.log("hello Js User");
}
JsUser.greetingTwo = function(){
   // console.log(`Hello js User, ${this.name}`);
}
// console.log(JsUser.greeting())
// console.log(JsUser.greetingTwo())

//********Objects part 2 **********//
//singelton

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "kjfsdnf"
tinderUser.isLoggedIn =false

//console.log(tinderUser)
const regularUser = {
    email: "Rishabh@.com",
    fullname: {
        userfullname: {
            firstname: "rishabh",
            lastname: "agnihotri"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname)
//merging of objects
const  obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = {obj1,obj2}
const obj3 = Object.assign({},obj1,obj2)
//console.log(obj3);

const user = [
    {
        email: "risha2.com",
        id: "234"
    },
    {
        
    }
]
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLogged'))