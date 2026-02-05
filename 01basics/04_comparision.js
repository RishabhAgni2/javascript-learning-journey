//>,>=,<,<=,==,!=

// console.log("2">0)
// console.log("02">1)

/*-------The reason is that an equality check == and comparisions
//><,>=,<= work differently.
//comparisions convert null to a number,treating  it as 0.
//That's why (3) null >= 0 is true and(1) null>=0 false*/
console.log(null>0)
console.log(null==0)
console.log(null>=0)

//===

console.log("2"===2)




