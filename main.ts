                   // ASSIGNMENT - ASYNCHROMOUS AND PROMISES - THURSDAY 9 TO 12 

// Question # 1: Write a simple asynchronous TypeScript function fetchGreeting that returns a greeting message after a 2-second delay using setTimeout.

async function fetchGreeting(){
    setTimeout(()=>{
  console.log("Hello! Welcome to our Company.")
   },2000)
}
fetchGreeting()

// Hello! Welcome to our Company. 


// Question # 2: Write a function simulateTask that simulates a task by logging "Task started", waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.

function simulateTask(){
    console.log("Task started")
    setTimeout(()=>{
  console.log("Task completed") 
   },1000)
}
simulateTask()

// Task started
// Task completed


// Question # 3: Write a function fetchData that returns a Promise which resolves with the string "Data fetched successfully!" after a delay of 1 second.

function fetchData(){
    return new Promise((res,rej)=>{  
    setTimeout(()=>{
        res("Data fetched successfully!") 
   },1000)
} )
}
fetchData().then((response:any)=>{
    console.log(response)
})

// Data fetched successfully! 


// Question # 4: Write a function fetchWithError that returns a Promise. It should randomly either resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a delay of 1 second. Handle the rejection using .catch

async function fetchWithError() {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
        const random =  Math.floor(Math.random() * 100 + 1);
        console.log("Random Number:",random)
        if(random % 2 == 0){
            res("Data fetched successfully! -- even number")
        }
        else{
            rej("Data fetch failed! -- odd number")
        }
    },1000)
})
}
fetchWithError().then((response)=>{console.log(response);})
.catch((error)=>{console.log(error);})

// Random Number: 42
// Data fetched successfully! -- even number 


// Question # 5: Write a function executeSequentially that executes two functions fetchData and processData sequentially using Promises, and logs the results in the order they are called.

let fetchdata = new Promise((res,rej)=>{
    res("Data Fetched")
})
let processData = new Promise((res,rej)=>{
    res("Data Processed")
})
async function executeSequentially(){
    let fetch = await fetchdata
    console.log(fetch)
    let process = await processData
    console.log(process)
}
executeSequentially()  

// Data Fetched
// Data Processed 