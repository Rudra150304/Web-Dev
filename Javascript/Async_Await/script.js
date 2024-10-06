// async function getData(){
//     // Simulates getting data from user
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(455)
//         }, 3500);
//     })
// }


// Settle means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully

async function getData(){
    // Simulates getting data from user
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })

    let data = await x.json()
    console.log(x)
    return data
}

async function main(){
    console.log("Loading Modules")

    console.log("Something else")

    console.log("Load Data")

    let data = await getData()

   console.log(data)

   console.log("Process Data")

   console.log("task 2")
}

main()

// data.then((v) => {

//     console.log(data)

//     console.log("Process Data")

//     console.log("task 2")
// })

