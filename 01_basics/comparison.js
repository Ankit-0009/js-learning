console.log('2' > 1);
console.log('02' > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); 
// The reason is that an equality check == and comparsion > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0. That's why 
// null > 0 => false (0 > 0)
// null >= 0 => true (0 >= 0)

console.log('2' === 2); // === is check that value as well as datatype also.