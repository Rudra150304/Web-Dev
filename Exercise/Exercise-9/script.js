let a = Number(prompt("Enter first number: "));
let b = Number(prompt("Enter second number: "));

let c = prompt("Enter the operation: ");

let random = Math.random()

let result;

let obj = {
    "+" : "-",
   "*" : "+",
   "-" : "/",
   "/" : "**"
}

if (random > 0.1){
    switch(c){
        case "+":
            result = a+b;
            break;
        case "*":
            result = a*b;
            break;
        case "-":
            result = a-b;
            break;
        case "/":
            result = a/b;
            break;
        default:
            result = "Invalid Operation or operands";
    }
}
else{
    c = obj[c];
    switch(c){
        case "+":
            result = a+b;
            break;
        case "*":
            result = a*b;
            break;
        case "-":
            result = a-b;
            break;
        case "/":
            result = a/b;
            break;
        default:
            result = "Invalid Operation or operands";
        }
    }

console.log(result);


/* + : -
   * : +
   - : /
   / : **

   wrong operation : 10%
*/