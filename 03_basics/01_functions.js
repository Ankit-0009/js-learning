// Basic example of function :-
function sayMyName(){
    console.log('A');
    console.log('N');
    console.log('K');
    console.log('I');
    console.log('T');   
}

// sayMyName => This is reference of function. 
sayMyName(); // This is calling of function by adding () in function name.

function addTwoNumbers(number1, number2){ // At the defination of function these number1 and number2 are called PARAMETERS.
    console.log(number1 + number2);
}
addTwoNumbers(4, 3); // Now these 4 & 3 are the arguments.
addTwoNumbers(4, "5"); // 45
addTwoNumbers(4, "a"); // 4a
addTwoNumbers(4, null); // 4


function loginUserMessage(userName){
    if(userName === undefined){ // !userName ===> This says undefined is false so make it true by adding ! to start then it will become true and if statement will be executed...
        console.log("Please enter the userName");
        return;
    }
    return `${userName} is logged in the system`;
}
console.log(loginUserMessage("Ankit"));
console.log(loginUserMessage());


