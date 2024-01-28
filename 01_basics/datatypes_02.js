/*
Primitive Datatypes :- These types make copies of data block.
7 Types => String, Number, Boolean, null, undefined, Symbol, BigInt

Reference Datatypes (Non-Primitive):-
Types => Array, Object, Functions
*/
const heroes = ['shaktiman', 'nagraj', 'doga']
let myObj = {
    name: "Ankit",
    age: 21, 
}

const myFunction = function(){
    console.log('Hello World');
}



/*
JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

int x = 10; // x is a variable of type int
String name = "John"; // name is a variable of type String
JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.
 */

// Return of typeof function :-
// Primitive datatypes:
// String - string
// Number - number
// Boolean - Boolean
// Null - object(****)
// Undefined - undefined
// BigInt - bigint

// Non-primitive datatypes:
// Array - object
// Function - function(object)
// Object - object



// *********************************************************************************

// Memory are of two types that are :- 
// Stack => used by the primitive datatypes    // Copy
// Heap => used by the non-primitive datatypes   // Reference

let name = 'Ankit'
let myname = name; // It makes a copy of 'Ankit' not reference it.
myname = 'Shiv';

console.log(name);
console.log(myname);


let userOne = {
    email: 'Ankit003',
    upiId: 'user@by'
}
let userTwo = userOne; // Here userTwo get the reference of the userOne.
userTwo.email = 'AAADRE$#';

console.log(userOne)
console.log(userTwo); // Both object email value has changed by changing in one object email.