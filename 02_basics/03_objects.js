// Singleton => Object made from constructor then Signleton formed. Object.create

// Object Literals

// How to use a symbol declaration in the object ...
const mySym = Symbol("key1");
console.log(mySym);

const jsUser = {
    name: 'Ankit',
    "full name": "Ankit Kumar", // This attribute of object can't access through dot(.) operator.
    age: 21,
    [mySym] : "Key111", // The syntax of writing the symbol in object. Famous question for the interview.
    location: "Delhi",
    email: "akitcode@.com",
    isLoggedIn: false,
    lastLoginDays: ['Monday','Thursday']    
}

console.log(jsUser.age);
console.log(jsUser["age"]);
console.log(jsUser["full name"]); // To access the string keys we have to write this syntax ...
console.log(jsUser[mySym]); // It is sytnax of accessing the symbol from the object ....


jsUser.age = 18; // Changing the age of the attribute of object ...
// Object.freeze(jsUser); // It describe that the object is freeze. So it can't change the fields of object.
jsUser.age = 44;
console.log(jsUser);


jsUser.greeting = function(){ // Function associated declaration of object ...
    console.log("Welcome for a berserk...");
}
console.log(jsUser.greeting); // This is greeting calling which gives output of [Function (anonymous)]
console.log(jsUser.greeting()); // This is greeting() calling which gives output of Function console line.

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // For self reference this keyword has used.
}
console.log(jsUser.greetingTwo());