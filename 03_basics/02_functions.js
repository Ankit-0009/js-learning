// Rest Operator ...
function calculateCartPrice (... num){ // Syntax of spread operator
    return num;
}
console.log(calculateCartPrice(200, 300, 400));


// This is usecase of function taking parameter of object ....
const user = {
    userName : "Ankit",
    score : 100
};

function handleObject(anyUser){ // Function that has object as parameter ...
    console.log(`The name of user is ${anyUser.userName} and the score is ${anyUser.score}`);
}
// handleObject(user); 
handleObject({
    userName: "Shiv",
    score: 300
});


// This is usecase of function of taking array as an argument ....
const myArray = [2,3,6,5];
function returnArray(getArray){
    return getArray[2];
}
console.log(returnArray(myArray));
