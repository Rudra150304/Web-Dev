console.log("Rudra hacker");
console.log("Fuck you!");

setTimeout(() => {
    console.log("I am inside settiomeout 1");
}, 0);

setTimeout(() => {
    console.log("I am inside settiomeout 2");
}, 0);

console.log("The End");

const fn = (() => {
  console.log("Dimag chud rha hai");
})

const callback = (arg, fn)=>{
    fn();
    console.log(arg)
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Rudra", fn);
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)