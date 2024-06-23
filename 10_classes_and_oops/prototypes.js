// let myName = "hitesh     "
// let myChannel = "CHAI     "

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor : "Hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`Spidy Power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh =function(){
    console.log(`Hitesh is present in all objects`);
}

Array.prototype.HeyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()

// myHeros.hitesh()

// myHeros.HeyHitesh()
// heroPower.HeyHitesh()

// inheritance

const user = {
    name: "chai",
    email: "google.com"
}


const teacher  = {
    makeVideo : true
}

const teachingSupport  = {
    isAvailable : false
}

const TASupport  = {
    makeAssignment : 'JS assignment',
    fulltime : true,
    __proto__ : teachingSupport
}

teacher.__proto__ = user

//modern syntax

Object.setPrototypeOf(teachingSupport, teacher)

let anotherUsername = "ChaiAURCode     "

String.prototype.trueLength =  function(){
    console.log(this);
    console.log(`True length is ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()
