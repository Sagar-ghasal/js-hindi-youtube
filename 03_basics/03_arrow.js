const user = {
    username:"hitesh",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`)  //this current context ko defin krta h scope ke 
        // console.log(this);
    }
}

// user.welcomeMessage;
// user.welcomeMessage();

// user.username="sam";
// user.welcomeMessage();
// console.log(this);

// function chai(){
//     let username = "hitesh";
//     console.log(this.username)
//     // console.log(this)
// }
// chai();

// const chai = function(){
//     let username = "hitesh";
//     console.log(this.username)
//     // console.log(this)

// }
// chai();

// const chai = () =>{
//     let username = "hitesh"
//     // console.log(this.username);
//     console.log(this);
// }

// chai();

//+++++++++ arrrow function ++++++++++

// const addTwo = (num1, num2) =>{
//     return num1 + num2 ;
// }

// const addTwo = (num1, num2) => num1 + num2 ;

// const addTwo = (num1, num2) => (num1 + num2);

// console.log(addTwo(3,4))

const myArray = [2,3,5,4,7,8];