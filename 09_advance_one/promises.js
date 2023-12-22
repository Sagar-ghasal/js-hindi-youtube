// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     //DB calls, cryptography, network

//     setTimeout(function(){
//         console.log('Async task is completed')
//         resolve()
//     },1000)
// });

// promiseOne.then(function(){
//     console.log("Promise consumed")
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async Task two")
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async 2 consumed")
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){

//         resolve({username:"chai", email:"chai@example.com"})

//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user)

// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({username:"hitesh", password:"123"})
//         }else{
//             reject("ERROR: Something went wrong")
//         }
//     })
// })

//  promiseFour
//  .then((user)=>{
//     console.log(user)
//     return user.username;
// })
// .then((username)=>{
//     console.log(username)
// })
// .catch(function(err){
//     console.log(err)
// }).finally(()=>{
//     console.log("The promise is either resolve or rejected")
// })


// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username:"javascript", password:"123"})
//         }else{
//             reject("ERROR: js went wrong")
//         }
//     })

// })

// async function consumePromiseFive(){
//   try{
//     const respone =  await promiseFive;
//     console.log("respone", respone)
//   }catch(err){

//     console.log(err)

//   }
// }

// consumePromiseFive();


async function getAllUsers(){
   try{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    const data = await response.json();
    console.log(data)
   }catch(err){
    console.log("E: error")
   }
}

getAllUsers();


fetch('https://api.github.com/users/hiteshchoudhary')
.then((res)=>{
    return res.json()
})
.then((data)=>{console.log(data)})
.catch((err)=>{
    console.log(err)
   })