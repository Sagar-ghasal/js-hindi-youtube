const userEmail = "h@hitesh.ai";

// if(userEmail){
//     console.log("Got user Email")
// }else{
//     console.log("Don't have user email ")
// }

//falsy values
// FileSystemWritableFileStream, 0, -0,  BigInt 0n, "", null, undefined, NaN

//truthy values
// true, "0","false","  ", [], {}, function(){},

//to check array is empty
// const user = [];

// if(user.length === 0){
//     console.log("Array is empty")
// }

// to check object is empty

// const emptyObj = {}
// if(Object.keys(emptyObj).length===0){
//     console.log("object is empty")
// }

// false==0 //true
// false =="" //true
// 0=="" //true

// Nullish Coalescing Operator (??) : null undefined

let val1; 
// val1 = 5 ?? 10;
// val1 = null ?? 10

val1 = undefined ?? 15



console.log(val1)