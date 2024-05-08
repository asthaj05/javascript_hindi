const accountId = 144553
let accountEmail = "asthajain@gmail.com"
var accountPassword = "1234"
accountCity = "jaipur" 
let accountState;

// accountId = 2 // not allowed

console.log(accountId);

accountEmail = "hsgh@gmail.com"
accountPassword = "234"
accountCity = "mumbai"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
prefer not to use var
because of issue in block scope and functional scope
*/