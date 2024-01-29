// Dates

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(typeof myDate);

// Every function has different format to represent the date.
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

// Passing the arguments to the Object of Date....
// The months are start from '0'...
let myCreateDate = new Date(2023, 0, 30); // (YYYY, M, DD) => FORMAT OF DATE 
console.log(myCreateDate.toDateString());
let createDate = new Date(2003, 1, 12, 5, 3); // (YYYY, M, DD, H, M) => FORMAT OF DATE
console.log(createDate.toLocaleString());

// Passing the string of DATE in format of (MM-DD-YYYY)
let anotherDate = new Date('01-21-2003');
console.log(anotherDate.toLocaleString()); 

let myTimeStamp =  Date.now();
console.log(myTimeStamp); // This give the milliseconds.
console.log(Math.floor(Date.now()/1000)); // Now it is converted into seconds.

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);
