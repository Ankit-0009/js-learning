// array
const myArr = [2,3,4,5,'Ankit','Kumar'];
console.log(myArr); // Array is JS makes the shallow copies rather than deep copies.
// Shallow copies refers to copy of object who share the same reference point.
// Deep copies opposite to the Shallow copy.

const myArr2 = new Array(2,3,4,5); // Another method of initialization of array.
console.log(myArr2[3]);


// Array Methods...
myArr2.push(3);
console.log(myArr2);

myArr2.unshift(4); // unshift => Added 4 to the starting of array.
console.log(myArr2);

myArr2.shift(); // shift => Remove the starting number from the array.
console.log(myArr2);

console.log(myArr2.includes(3)); // It return true/false.

const newArr = myArr2.join(); // Copy the entire array but as a string.
console.log(newArr);
console.log(typeof newArr);


// slice, splice

console.log('Before the slice ',myArr2);
const nArr = myArr2.slice(1,3); // It don't affect the original array.
console.log('After the slice',myArr2);
console.log('The slice of array ',nArr);

console.log('Before the splice ',myArr2);
const mArr = myArr2.splice(1,3); // It affect the original array.
console.log('After the splice',myArr2);
console.log('The slice of array ',mArr);


