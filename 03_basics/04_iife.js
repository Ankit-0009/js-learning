// Immediately Invoked Function Expression (IIFE)

(function chai(){ // Named iife
    console.log("DB connected");
})(); // Study from the documentation for IIFE.

((name) => {
    console.log(`Hello ${name}`);
})("Ankit"); // At end of () ; lagana zarrori hai ..

