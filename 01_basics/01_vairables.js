const accountId =144553;
let accountEmail = "sagar@google.com";
var accountPassword ="12345";
accountCity= "jaipur"

// accountID = 2 // not allowed


/*
prefer not to use var keyword because of issue in block scope & functional scope
*/

accountEmail ="s@dd.com";
accountPassword ="4578123";
accountCity = "jodhpur";

console.table([accountId,accountEmail,accountPassword, accountCity])