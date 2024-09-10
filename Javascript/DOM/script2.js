console.log("Rudra");

// let a = document.getElementsByClassName("box");
// console.log("Hellooooo");
// a[2].style.backgroundColor = "red";

// document.getElementById("red").style.backgroundColor = "red";

// document.querySelector(".box").style.backgroundColor = "green";

console.log(document.getElementsByTagName("div"));

console.log(document.querySelectorAll(".box"));

document.querySelectorAll(".box").forEach( e =>{
    e.style.backgroundColor = "green";
})