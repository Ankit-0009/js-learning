// const arr = ["JS", "JAVA", "PYTHON", "CPP"];
// const value = arr.forEach((item) => {
//     console.log(item);
// })
// console.log(value); // undefined    No value can't return from the forEach callback function...


const arr = [1,2,3,4,5,6,7,9];
const value = arr.filter((num) => { // Filter return the values...
    return num > 4;  // When scope has introduced then return keyword has to added.
})
console.log(value);


// Same work filter using forEach loop by applying some logic ...
const newNum = [];
arr.forEach((num) => {
    if(num>4){
        newNum.push(num);
    }
})
console.log(newNum);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  // Apply some operations using filter such as 
  // Select those books which having genre history .....
  let selectBooks = books.filter((gen) => {
    return gen.genre === "History"
  })
  console.log(selectBooks);

  // Now select those which are published after 1999 and genre is Science ...
  let selection = books.filter((book) => {
    return book.genre === "Science" && book.edition >= 1999
  })
  console.log(selection);