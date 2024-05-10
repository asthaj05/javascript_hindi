
// Primitive

// 7 types : String , Number , Boolean , null , undefined , symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const BigNumber = 364378941683n


// References (Non Primitive)

// Array , Objects , Functions

const heros = ["shaktiman" , "naagraj" , "doga"]
let myObj = {
    name : "astha",
    age : 22,
}

const myFunction = function(){
    console.log("Hello world!");

}
console.log(typeof myFunction);

// **********************]

// Stack(Primitive) , Heap(Non- Primitive)

let myYoutubename = "astha jain"
let anotherName = myYoutubename
anotherName = "chai aur code"


console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email : "user@google.com", 
    upi : "upi@ybl"
}

let userTwo = userOne

userTwo.email = "astha@google.com"

console.log(userOne.email);
console.log(userTwo.email);

let studentOne = {
    email : "ashish@gmail.com",
    upi : "ashish@ybl"
}

let studentTwo = studentOne

studentTwo.email = "asthajain@gmail.com"

console.log(studentOne);
console.log(studentTwo);


