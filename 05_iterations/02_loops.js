// How to iterate over the objects ... ?   Using the forin loop

const myObj = {
    js : 'Javascript',
    cpp : 'C++',
    rb: 'Ruby',
}

for (const key in myObj) { // key is js, cpp, rb
    console.log(`${key} stands for the ${myObj[key]} `); // myObj[key] is the value of the keys in object.
}


const myArr = [4, 6, 7, 2, 1];
for (const key in myArr) {
    console.log(key); // 0 1 2 3 4 
    console.log(myArr[key]); // 4 6 7 2 1
}


// forin loop can't apply on the maps bcz of maps are not iteratable in programming.
