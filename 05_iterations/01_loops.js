    // for of

    // arr = ["", "", ""]
    // arr = [{}, {}, {}]

    const myArr = [2, 3, 4, 5];
    for (const num of myArr) {
        console.log(num);
    }

    const greeting = "Hello";
    for (const greet of greeting) {
        console.log(greet);
    }


    // Maps 
    const map = new Map(); // Maps are object but acquire only unique entries and in the according to order of entering.
    map.set('IN', "India");
    map.set('USA', "United States of America");
    map.set('UN', "United Nations");
    map.set('IN', "India"); // Here map will not take this entry due to redundancy of the data entries ...
    
    console.log(map);


    for (const key of map) {
        console.log(key); 
        /*
        The ouput of this loop is :-
            [ 'IN', 'India' ]
            [ 'USA', 'United States of America' ]
            [ 'UN', 'United Nations' ]
         */
    }


    for (const [key,value] of map) {  // De-structuring of the array ...
        console.log(key, ':-', value);
        // The output of this loop :-
        // IN :- India
        // USA :- United States of America
        // UN :- United Nations
    }


    // Array containing objects 

    const myCoding = [
        {
            languageName : "javascript",
            languageFileName : "js"
        },
        {
            languageName : "java",
            languageFileName : "java"
        },
        {
            languageName : "python",
            languageFileName : "py"
        }
    ]

    myCoding.forEach((item) =>{
        console.log(item.languageFileName);
    })

    
