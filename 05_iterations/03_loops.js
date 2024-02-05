// foreach loop .....

const coding = ['js', 'cpp', 'python', 'java'];

coding.forEach(function(val) { // function(val) => Call back function. 
    console.log(val);
})

coding.forEach((item) => { // Here we use arrow function.
    console.log(item);
})


// Here we also apply any defined function in forEach loop.
function declare(item){
    console.log(item);
}

coding.forEach(declare); // Write only function reference.