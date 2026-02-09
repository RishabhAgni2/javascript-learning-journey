//scopes 
let a = 300;//global scope
if(true){
    let a = 10;//Block scope
    const b= 20;
    var c = 30;
    //console.log("Inner: ", a)
}

//console.log("outer: ", a)

function one(){
      const username = "Rishabh"
      function two(){
        const website = "Youtube"
        //console.log(username);
      }
      //console.log(website);

      two()
}
one()

//+++++++++interesting+++++++++++++++++

console.log("addone: ",addone(5))
function addone(num){
    return num + 1
}
addone(5)
//console.log(addtwo(5))//we cannot access addtwo since we assign variable to the function
const addtwo = function(num){
    return num + 2;
}

console.log("addtwo: ",addtwo(5))