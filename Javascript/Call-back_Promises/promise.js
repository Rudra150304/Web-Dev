console.log("Promises");

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a<0.5){
        reject("NO!");
    }
    else{
        setTimeout(() => {
            console.log("Yes I am done");
            resolve("Rudra");
        }, 1000);
    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a<0.5){
        reject("NO 2!");
    }
    else{
        setTimeout(() => {
            console.log("Yes I am done 2");
            resolve("Rudra 2");
        }, 1000);
    }
})

let p3 = Promise.allSettled([prom1, prom2])
p3.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
})