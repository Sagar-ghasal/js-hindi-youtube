// if

const isUserloggedIn = true;
const temperature = 41;

// if(temperature < 50){
//     console.log("less than 50");
// }else{
//     console.log("temperature is greater than 50")
// }



//<, >, <=,>=, ==, !=, !==

// const score = 200;

// if(score >100){
//     const power = "fly"
//     console.log(`user power : ${power}`)
// }

// console.log(`user power : ${power}`)

const balance  = 1000;
// if(balance >500) console.log(test),  //code is run but not best practice
// console.log("test2")

// if(balance < 500){
//     console.log("less than")
// }else if(balance <750){
//     console.log("less than 750")
// }

const userLoggedIn = true;
const debitCard = true;
const loggedinFromGoogle = false;
const loggedInFromEmail  = true;

if(userLoggedIn && debitCard){
    console.log("Allow to buy course")
}

if(loggedInFromEmail || loggedinFromGoogle ){
    console.log("User logged in")
}

