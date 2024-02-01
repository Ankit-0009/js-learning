// this pointer ...

const user = {
    userName : "Ankit Kumar",
    price : 299,
    welcomeMessage : function(){
        console.log(`${this.userName} , Welcome to the website ...`); // this.userName => refers to the userName that the user has enter not the object defination write as.
        console.log(this); // this => it is referred to current context of an object. As the example below it describe the current object attributes. 
    }
}

user.welcomeMessage();
user.userName = "Manoj"; // Here object userName has changed now this show this name of the object irrespective of given userName in the object defination. ...
user.welcomeMessage();

console.log(this); // Output => {} bcz of the node environment ...   The Window object is the global object through which we can access all the operations of window...


// this used in function ?
function one(){
    const userName = "Mihawk"
    console.log(this.userName); // undefined output due to "this" only used in object.
}
one()


// Arrow Function ....
const two = () => {
    // console.log("Same Same But Different ..."); 
    const name = "Ankt";
    console.log(this.name);
}
two(); // undefined  ....  Work as the above function defination...


// Other method to show the arrow function ....
// const addTwo = (num1, num2) => num1 + num2; // There is not need to include return keyword in the return statement.
// If we want to include return keyword then ....
// const addTwo = (num1, num2) => (num1 + num2); // When parathesis used then no need to write the return keyword ...

// If an object return then used the following syntax ....
const addTwo = (num1, num2) => ({username: "Ankit"});  // Output :- { username: 'Ankit' }


console.log(addTwo(4,3));