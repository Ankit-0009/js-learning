const marvel_heroes = ['thor', 'ironman', 'broot'];
const dc_heroes = ['superman', 'batman', 'flash'];

const allHeroes = marvel_heroes.concat(dc_heroes); // concat => This method return an array that is catenation of dc and marvel heroes.
console.log(allHeroes); 

const allHeroes_1 = [...marvel_heroes, ...dc_heroes]; // Actually it is more efficient method to concatenate the arrays rather than concat method. Bcz we can concat more than two arrays.
console.log(allHeroes_1);


const another_Array = [3,6,8,2,4,[1,2,4,7,4,[3,4]]];
const real_another_Array = another_Array.flat(Infinity); // flat(Infinity) => This is actually used to make a single dimension array.
console.log(real_another_Array); 


console.log(Array.isArray('Ankit'));
console.log(Array.from('Ankit'));
console.log(Array.from({name:'Ankit'})); // Interesting Case for the interview perspective.


let score1 = 100;
let score2 = 233;
console.log(Array.of(score1, score2));

// Study more about the isArray(), from(), of() in detail ....