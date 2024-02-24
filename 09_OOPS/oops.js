// Object Literal...
const person = {
    name: "Ankit",
    email: "ankit@example.com",
    getinfo: function(){
        console.log(`Name of person: ${this.name}`);
        console.log(`Email of person: ${this.email}`);
    }
}
console.log(person);
console.log(person.getinfo());

// Constructor function...
function user(name, password, score){
    this.name = name;
    this.password = password;
    this.score = score;

}
const user1 = new user("Ankit", 344, 99);
const user2 = new user("Jay", 455, 93);
console.log(user1);
console.log(user2);