const myname = "Rishabh"
const lastname = " Agni"

//console.log(myname  + lastname + " Value");

console.log(` ${myname} ${lastname}`);
const gameName = new String('Ris-habh-ag')

//console.log(gameName[0]);
//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4)
//console.log(newString);

const anotherString = gameName.slice(-8,4)
//console.log(anotherString)

const newStringOne = "    rishabh     "
//console.log(newStringOne);
//console.log(newStringOne.trim());

const url = "https://Rishabh.com/rishabh%20agnihotri"
console.log(url.replace('%20','-'))
console.log(url.includes('Rishabh'))

console.log(gameName.split('-'));