// const user = {
//     username : "astha",
//     loginCount : 8,
//     signedIn : true,

    //getUserDetails: function(){
    //     console.log("got user details from database");
        // console.log(`username: ${this.username}`);
        //console.log(this);
    //}
//}

//console.log(user.username);
//console.log(user.getUserDetails());

// console.log(this);

function user(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greetings = function(){
        // console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new user("hitesh", 12, true)
const userTwo  = new user("Chaiaurcode",23,true)
console.log(userOne.constructor);
// console.log(userTwo);

// new keyword creates empty object which is called instance
// constructor function called by new keyword wraps the arguments
// this key se inject ho jaate hai arguments
//function ke andar sab mil jaata hai
