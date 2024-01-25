// -----------------------------------------------------------------------------------------------------------------------------------

let a = 10

console.log(`The Value of a is :- ${a}`)            // The Value of a is :- 10

setTimeout(() =>{
    a = 20
}, 2000)

console.log(`The Value of a is :- ${a}`)            // The Value of a is :- 10


// -----------------------------------------------------------------------------------------------------------------------------------

let b = 10

console.log(`The Value of b is :- ${b}`)            // The Value of b is :- 10

let Func = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve(20)
    }, 2000)
})

Func.then((value) =>{
    b = value
    console.log(`The Value of b is :- ${b}`)        // The Value of b is :- 20    <------ After 2 Seconds
})

// -----------------------------------------------------------------------------------------------------------------------------------