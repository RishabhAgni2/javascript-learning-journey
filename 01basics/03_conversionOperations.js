// **************************conversions*****************
// let score = "33aabc"   // ->1
// let score = null        //->2
// let score = undefined  // ->3
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn)
//1 => true; 0 => false
//"" =>false
//"rishabh" => true
//----------------------------------
let score = "33aabc"
//console.log(typeof score)
let valueInNumber = Number(score)//conversion of string to number
//console.log(typeof valueInNumber);
//console.log(valueInNumber)//it gives NaN but its type shows a number

//"33"=>33
//"33abc"=>NaN
//ture=>1,false=>0

//-------->1
// string
// number
// NaN

//----->>>2
// object
// number
// 0

//--->>3
// undefined
// number
// NaN
//-------------------------
let somenumber = 24
let stringNumber = String(somenumber)
//console.log(stringNumber)
//console.log(typeof stringNumber)

// ***********************Operations********************************
let value = 3
let negValue = -value
//console.log(negValue)

// console.log(2+2)
// console.log(9%5)
// console.log(7/3)
// console.log(2**3)
let str1 = "Rishabh"
let str2 = " Agnihotri"
let str3 = str1+ str2
//console.log(str3)
// console.log("1"+2)

// console.log(1+"2") -->12
// console.log(1+2+"2")-->32
// console.log("1"+2+2)-->122

// console.log(+true);
// console.log(+"")

// let num1, num2, num3
// num1=num2= num3=2+2

let gameCounter = 100
//gameCounter++;
++gameCounter;
console.log(gameCounter)
//prefix,postfix to read
