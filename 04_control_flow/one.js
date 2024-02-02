// if (truthy and falsy)

// const userEmail = "LoggedIn"; // if condition true 
// const userEmail = []; // if condition true
const userEmail = ""; // else condition true 

if(userEmail){
    console.log("Got user email ...");
} else {
    console.log("Don't enter in the system ...");
}

// Falsy Values ....
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values ....
// "0", "false", " ", [], {}, function(){} 


// Checking empty array ...
const myArr = [];
if(myArr.length === 0) {
    console.log("Array is empty");
}

// Checking empty object ...
const myObj = {};
if(Object.keys(myObj).length === 0) { // Object.keys(myObj) => return the array then apply the array properties.
    console.log("Object is empty");
}



// Nullish Coalescing Operator (??) : null, undefined 

let val;
// val = 5 ?? 10;  => 5
// val = null ?? 5;  => 5  // Basically used to handle the null and undefined so that inconsistency not happened...
val = undefined ?? 3;

console.log(val);


// Terniary Operator ...
// condition : true ? false
