let button = document.getElementById("btn");
button.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML = 
    "<b>You were clicked</b>"
})
button.addEventListener("dblclick", ()=>{
    alert("Clicked");
})
button.addEventListener("contextmenu", ()=>{
    alert("Right-Clicked");
})
document.addEventListener("keydown", ()=>{
    alert("key pressed");
})
``