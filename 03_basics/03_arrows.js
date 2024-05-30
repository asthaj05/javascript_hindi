const user = {
    username : "hitesh",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this);

// function chai (){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai ()

// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai ()

// const chai = () => {
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai ()

// const addTWo = (num1, num2) => {
//     return num1 + num2        (explicit return: jaha return krna pad rha hai)
// }

// console.log(addTWo(3,4));


// const addTWo = (num1, num2) =>  num1 + num2  (implicit return : jaha return nahi zaroorat)

// const addTWo = (num1, num2) =>  (num1 + num2)

const addTWo = (num1, num2) => ({username : "astha"})


console.log(addTWo(3,4));

const myArray =[2,3,4,5] 

// myArray.forEach()
