const accountId = 14453

let accountEmail = "rishabh@google.com"
var accountPassword ="12345"
accountCity = "jaipur"
let m;   // ->if u are not assigning value then it is undefined

//accountId = 2 -> not allowed to assign the another value

// accountEmail = "Rishabh.com" -->allowed to assign the anothervalue
// accountPassword = "888445" -->allowed 
// accountCity = "agra" -->allowed

console.log(accountId)

console.table([accountId,accountEmail,accountPassword,accountCity,m])
/*
prefer not to use var
because of issue in block scope and functional scope
*/