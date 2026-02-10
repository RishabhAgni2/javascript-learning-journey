//Immediately Invoked function Expressions(IIFE)
//use to avoid global effect polution we  use iife
(function chai(){
    console.log(`DB CONNECTED`)
})();

((name) => {
    console.log(`Db connected two ${name}`);
})('Rishabh')
//how does javascript execute code+call stack;

