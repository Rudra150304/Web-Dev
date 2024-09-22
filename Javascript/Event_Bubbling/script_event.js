document.querySelector(".child").addEventListener("click", (e)=>{
    e.stopPropagation()
    alert("Child was clicked");
})

document.querySelector(".childcontainer").addEventListener("click", (e)=>{
    e.stopPropagation()
    alert("Childcontainer was clicked");
})

function getRandomColor(){
    let v1 = Math.ceil(0 + Math.random()*255);
    let v2 = Math.ceil(0 + Math.random()*255);
    let v3 = Math.ceil(0 + Math.random()*255);
    return `rgb(${v1},${v2},${v3})`;
}

document.querySelector(".container").addEventListener("click", (e)=>{
    alert("Container was clicked");
})

let a = setInterval(() => {
    document.querySelector(".childcontainer").style.background = getRandomColor();
},1000);

// let a = settimeout(() => {
//     document.querySelector(".childcontainer").style.background = getRandomColor();
// },1000);

console.log(a);

// clearTimeout(a);

// clearinterval(a);