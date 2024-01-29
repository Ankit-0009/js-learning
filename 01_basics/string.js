// String Interpolation
let name = 'Ankit';
let score = 45;
console.log(`This is ${name} and I have got ${score} rank in GATE...`);

// String is an object which containing different attributes that will find by write string on inspect of chrome.

// Itialization of Strings :-
const gameName = new String('GTa-5');
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.charAt(2)); 
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,3); // The copy of string from index '0' to '2' has come in the newString variable.
console.log(newString);

const anotherString = gameName.slice(-2,5); // It started from the index from negative also. 
console.log(anotherString);

const newStringOne = "   Ankit    ";
console.log(newStringOne);
console.log(newStringOne.trim()); // It remove all white spaces and line terminator in the string. Also read about it on MDN.

const URL = "https://ankit.com/ankit%20kumar";
console.log(URL.replace('%20','-')); // The replace function replace the character from the string.
console.log(URL.includes('ankit'));
console.log(URL.includes('ankt'));
console.log(URL.split('/')); // The string split in the array by identifing the character such as '/'