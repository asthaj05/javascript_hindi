// Immediately Invoked Function Expressions (IIFE)


(function chai (){
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
} )('Astha');

// global scope ke pollution se problem hoti hai kahi baar
 //toh uss global scope ke variabke 
//se pollution hoti hai usko hatane ke liye use krte hai


