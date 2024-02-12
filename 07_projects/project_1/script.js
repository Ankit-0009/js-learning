const body = document.querySelector('body');
console.log(body);
const buttons = document.querySelectorAll('.button');
console.log(buttons);
buttons.forEach((button) => {
    console.log("Button: ", button);
    button.addEventListener('click', () => {
        console.log("Button clicked: ", button);
        console.log("Button color: ", button.id);
        body.style.backgroundColor = button.id;
    });
})