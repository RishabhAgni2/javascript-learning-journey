// ---->for of loop

//["","",];
//[{},{}];

const arr = [1,2,3,4,5,6]

for (const num of arr ) {
    //console.log(num)
}
//Maps---> print the order in which u assign the keys and used for unique keys
 const map = new Map()
 map.set('IN', "India")
 map.set('AUS', "Australia")
 map.set('SRI', "Sri lanka")

// console.log(map);

 for(const [key,value] of map){
    //console.log(key, ':-', value);
 }

//  const myobj = {
//     'game1': 'NFS',
//     'game2': 'Spiderman'
//  }
 //object is not iteratabel by for of loop

  const myobj = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
 }

//+++++++++---> for in loop ++++++++///

 //for in loop can be used both for array and object
 for(const key in arr){
    //console.log(`${key} shortcut is for ${myobj[key]}`);
    //console.log(`${key} index has  ${arr[key]}`)
 }

// ------> for each loop ++++++

const coding = ["js", "ruby", "python","cpp"];
coding.forEach( function (val) {
    //console.log(val);
} )
coding.forEach(  (val) => {
    //console.log(val)
})
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

coding.forEach( (item,index,arr) =>{
    //console.log(item, index, arr)
})

const mycoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]
mycoding.forEach( (item) => {
    //console.log(item.languageName,item.languageFileName)
})

const myNums = [1,2,3,4,5,6,7,8,9,10]
//filter method

const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums)
// const newNums = myNums.filter( (num) => {
//     return num > 2;
// })

// const newNums = [];

// myNums.forEach( (num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })
//console.log(newNums)


const myNumbers = [1,2,3,4,5,6,7,8,9,10]
//map method
//const Nums = myNumbers.map( (num) => num + 10)
const Nums = myNumbers
              .map( (num) => num*10)
              .map( (num) => num+1)
              .filter( (num) => num>40)
//console.log(Nums)


const mynum = [1,2,3]
//reduce method
// const mytotal = mynum.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval;
// },0)
const mytotal = mynum.reduce( (acc,curr) => acc+curr,0)

console.log(mytotal)


