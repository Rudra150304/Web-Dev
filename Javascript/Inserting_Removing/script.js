console.log(document.querySelector(".box").innerHTML);

console.log(document.querySelector(".box").outerHTML);

console.log(document.querySelector(".container").innerText);

console.log(document.querySelector(".container").tagName);

console.log(document.querySelector(".container").nodeName);

console.log(document.querySelector(".box").textContent);

console.log(document.querySelector(".container").hidden);

// console.log(document.querySelector(".container").hidden = true);

console.log(document.querySelector(".box").innerHTML = "Hey I am Rudra");

console.log(document.querySelector(".box").hasAttribute("style"));

console.log(document.querySelector(".box").getAttribute("style"));

console.log(document.querySelector(".box").setAttribute("style", "display: inline"));

console.log(NamedNodeMap);

document.querySelector(".box").removeAttribute("Style");

let div = document.createElement("div");
div.innerHTML = "I have been inserted by <b>Rudra</b>"
div.setAttribute("class", "created");
// document.querySelector(".container").append(div);
// document.querySelector(".container").before(div);
// document.querySelector(".container").after(div);
document.querySelector(".container").prepend(div);

let cont = document.querySelector(".container");
cont.insertAdjacentHTML("beforeend", "Inserted");

console.log(document.querySelector(".container").classList);

console.log(document.querySelector(".container").className);

console.log(document.querySelector(".container").classList.add("Rudra"));

console.log(document.querySelector(".container").classList.remove("Rudra"));

console.log(document.querySelector(".container").classList.add("Rudra"));

console.log(document.querySelector(".container").classList.toggle("Rudra"));
console.log(document.querySelector(".container").classList.toggle("Rudra"));