// Creating a promise ..
const promise = new Promise(function(resolve,reject){
    // Do async task
    // Connectivity to DB.
    setTimeout(function(){
        console.log('Async task has completed');
        // To make connectivity of resolve to then we have to write ...
        resolve();
    },1000);
    
    
})

// then related to resolve...
promise.then(function(){
    console.log('Resolve has executed');
})



// Another way to write the promises....
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task - 2');
        resolve();
    },1000)
}).then(function(){
    console.log('Resolve for async - 2');
})


// Promise which send parameter to the resolve ....
new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Ankit", email: "ankitcode2511@gmail.com"});
    },1000)
}).then(function(user){
    console.log(user);
})


// Using of reject variable and chaining of then keyword...
// If we return any constraint from 'then' so it can't store in any variable therefore to show the return value, we have to make chaining of 'then' .
const promiseFour = new Promise(function(resolve,reject){
    let error = true;
    setTimeout(function(){
    if(!error){
        resolve({username: "ankit", password: "123"});
    } else {
        reject('Error! Something went wrong');
    }},1000);
})
promiseFour.then((user) => {
    console.log(user);
    return user.username; // It is return the username so next 'then' will be accept the username.
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('The promise has either resolve or rejected');
})


// Now we use async & await instead of then & catch ...
const promiseFive = new Promise(function(resolve,reject){
    let error = false;
    setTimeout(function(){
    if(!error){
        resolve({username: "ankit", password: "123"});
    } else {
        reject('Error! Something went wrong');
    }},1000);
})
async function consumePromiseFive (){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);        
    }
}
consumePromiseFive()


// Fetch usecase
// async function promiseSix (){
//     const URL = await fetch('https://gist.githubusercontent.com/shanselman/5e27afbd5f213974b2fc63b082f2df4c/raw/927620d1ece8512584ea2abd492a8385d8de6f62/profile.json');
//     try {
//         const data = await URL.json();
//         console.log(data);
//     } catch (error) {
//         console.log('Error');
        
//     }
// }
// promiseSix();

// Fetch usecase using then and catch ...
fetch('https://gist.githubusercontent.com/shanselman/5e27afbd5f213974b2fc63b082f2df4c/raw/927620d1ece8512584ea2abd492a8385d8de6f62/profile.json')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch(() => {
    console.log('Error! ');
})