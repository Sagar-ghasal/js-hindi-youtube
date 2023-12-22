// const user = {
//     username:"hitesh",
//     loginCount:8,
//     signedIn:true,

//     getUserDetails:function(){
//         // console.log(this.username)
//         // console.log(this)
//     }
// }

// const user2 = {
//     username:"hitesh",
//     loginCount:8,
//     signedIn:true,

//     getUserDetails:function(){
//         // console.log(this.username)
//         // console.log(this)
//     }
// }

// console.log(user.getUserDetails())

// console.log(this)

// const promiseOne  = new Promise();

function user(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

const userOne = new user("hitesh",12,true);
const userTwo = new user("sagar",11, false)

console.log(userOne);
console.log(userTwo)