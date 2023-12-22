//generate hex color

const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = "#"

    for(let i=0; i<6; i++){
        let char = Math.floor(Math.random()*16);
        // console.log(char);
        // console.log(hex.charAt(char));
        // color += hex.charAt(char)
        color += hex[Math.floor(Math.random() * 16)]

    }
    // console.log(color)
    return color
}
let changeColorInterval;
const body = document.querySelector('body');

const changeColor = function(value){
    body.style.backgroundColor = value;
}

document.getElementById("start").addEventListener('click',function(){
 changeColorInterval = setInterval(()=>{changeColor(randomColor())},1000)

    
})

document.getElementById('stop').addEventListener('click', function(){
    clearInterval(changeColorInterval)
  })


// console.log(Math.random() *16)


// let intervalId;
// const startChangingColor = function(){
//     function changeBgColor(){
//         document.body.style.backgroundColor = randomColor()
//     };
//    if(!intervalId){
//     intervalId =  setInterval(changeBgColor, 1000)
//    }
   
// }

// const stopChangingColor = function(){
//    clearInterval(intervalId);
//    intervalId = null;
// }



// document.querySelector("#start").addEventListener("click", startChangingColor)

// document.querySelector("#stop").addEventListener("click", stopChangingColor)