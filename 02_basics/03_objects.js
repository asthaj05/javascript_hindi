// singleton 
// Object.create
// object literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "hitesh", 
    "full name" :"Hitesh choudhary",
    [mySym]: "myKey1",
    age: 18,
    location : "Jaipur",
    email: "hiteh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday" , "saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log( typeof JsUser[mySym]);

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo  = function(){
    console.log(`Hello JS user, ${this.name}`);
}



console.log(JsUser.greeting); // output :- [Function (anonymous)]
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
