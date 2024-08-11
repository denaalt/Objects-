
let book = {
Title: "JavaScript: The Definitive Guide",
    Author: "David Flanagan",
     PublishedYear: 2020,
     Genre: "Programming"
};
console.log(book.Title);
console.log(book["PublishedYear"]);

/*****************************************************************
Part 1: Understanding Objects

You are given the task of representing a book in a library system. 
Use an object to model the book with the following information:

- Title: "JavaScript: The Definitive Guide"
- Author: "David Flanagan"
- Published Year: 2020
- Genre: "Programming"

Task 1) Create an object named 'book' using curly braces {} that includes the information above.
ask 2) Access and return the book's title using dot notation and the published year using bracket notation.
******************************************************************/
book.PublishedYear= 2021;
book.pageCount = 1096;
// 
book.ISBN = "978-1491952023";
console.log(book)






