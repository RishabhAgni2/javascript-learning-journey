//function
//  function addtwo(num1,num2){//num1,num2 are parameters
//    console.log(num1+num2);
// }
//addtwo(3,"4")//3,"4"are arguments
function addtwo(num1,num2){
    let result = num1 + num2;
    return result;
    console.log("Rishabh");//after return no statement will run
}

const result = addtwo(3,5)
//console.log("Result:", result)

function loginUserName(username = "Rish"){
    if(username===undefined){
        console.log("please enter the username");
        return 
    }
    return `${username} just logged in`
}
//console.log(loginUserName("Rishabh"))
//console.log(loginUserName("rishabh"))
function calculateCartPrice(val1,val2,...num){// three dots is the rest operator
    return num
}
//console.log(calculateCartPrice(15,14,10,15,20))
const user = {
    username: "hitesh",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} 
        and price is ${anyobject.price}`)   
}
//handleObject(user)
// handleObject({
//     username: "sam",
//     price: 999
// })
const myNewArray = [200,400,500,443]

function returnsecondvalue(getArray){
    return getArray[1]
}
//console.log(returnsecondvalue(myNewArray));
console.log(returnsecondvalue([200,499,544,34]))
