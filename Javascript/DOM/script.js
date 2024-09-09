console.log("Hello World");
console.log(document.body.childNodes);
console.log(document.body.firstElementChild);
console.log(document.body.firstElementChild.children);
let cont = document.body.childNodes[1];
console.log(cont.firstElementChild);
console.log(cont.lastElementChild);
console.log(cont.childNodes[3].previousSibling);
console.log(cont.childNodes[3].nextSibling);