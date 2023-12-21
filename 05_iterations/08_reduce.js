const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} andcurrval : ${currval}`)
//     return acc + currval

// }, 3);

const myTotal = myNums.reduce((acc, currval)=>{
   return acc + currval;
},0)

// console.log(myTotal)

const shoppingCart = [
    {
        itemName : "js Course",
        price : 2999
    },
    {
        itemName : "python Course",
        price : 999
    },
    {
        itemName : "mobile development Course",
        price : 5999
    },
    {
        itemName : "Data Science Course",
        price : 12999
    },
];

const total = shoppingCart.reduce((acc, item)=>(acc + item.price),0);

console.log(total)