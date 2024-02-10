const arr = [1,2,3,4,5,6,7,8,9];

// maps apply to add 10 to each number in arr...
const finalArr = arr.map((num) => {
    return num + 10;
})
console.log(finalArr);

// Adding 10 to each number by forEach loop ...
arr.forEach((num, i) => { // Here we take num and i which represent the each element of array with its index.
    arr[i] = num + 10 // Now add 10 to each array element 
})
console.log(arr);


// Chaining Concept ....
const myArr = [1,2,3,4,5,6,7];
const result = myArr
               .map((num) => num * 10)
               .map((num) => num + 1)
               .filter((num) => num > 38)

console.log(result);