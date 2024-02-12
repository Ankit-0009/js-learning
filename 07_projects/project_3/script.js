const clock = document.querySelector("#clock");
// clock.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;

// Here a famous interview question about to dynamically the clock digits has to change.
// For that we have to apply an event which is setInterval().

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000) // Here 1000 represt the milliseconds to change the elements dynamically.