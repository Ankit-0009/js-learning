// Here we are talking about the object creation by constructor / Simpleton...

// const tinderUser = new Object();  // This is creation of object using constructor.

const tinderUser ={}; // Non-Simpleton.

tinderUser.id = "user@gmail.com";
tinderUser.name = "Jermey";
tinderUser.isLoggedIn = false;
// console.log(tinderUser); 

// Nested object intialization ....
const regularUser = {
    email: "regular@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ankit",
            lastname: "Kumar"
        }
    }
}
console.log(regularUser);
console.log(regularUser.fullname.userfullname.firstname); // Acessing the entites using dot(.) operator. 


// Combining of two or more objects ...
const obj1 = {1: 'a',2: 'b'};
const obj2 = {3: 'c',4: 'd'};

// const obj3 = {obj1,obj2};  // Actually it is give an output which is not desirable :- { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } } 
// The combining objects are still different to each other...

// const obj3 = Object.assign({}, obj1, obj2); // This is the required syntax to combine the different objects which give an output :- { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// The significance of {} in assign method is that all the objects values are combined in the empty object then it is return to the obj3 ...

const obj3 = {...obj1, ...obj2}; // This is most efficient syntax to combine the objects. There would not any tnsn to add empty object just simply used spread operator.

console.log(obj3); 


// Now come back to tinderUser...
console.log(tinderUser);
console.log(Object.keys(tinderUser)); // Now there is an interesting thing happen that is the keys are come in array as shown in the output :- [ 'id', 'name', 'isLoggedIn' ]. Therefore we can apply various methods such as apply loop and other stuffs in the project.

console.log(Object.values(tinderUser)); // Similar to the keys...

console.log(Object.entries(tinderUser)); // It similar to the above but there is some change that it makes an array such as :-[ [ 'id', 'user@gmail.com' ], [ 'name','Jermey' ], [ 'isLoggedIn', false ] ] 
// In the entries() the first index of each array is key of the object and next index refers to the value of that key ...

console.log(tinderUser.hasOwnProperty("isLoggedIn")); // As name suggest this property check keys present in the object or not... (true/false)