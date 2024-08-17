// Constructor function for creating Book objects
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

// Method to display book information
Book.prototype.displayInfo = function() {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`;
};

// Array to store books in the library
const library = [];

// Function to add a new book to the library
function addBook(title, author, pages) {
    const newBook = new Book(title, author, pages);
    library.push(newBook);
    console.log(`Added: ${newBook.displayInfo()}`);
}

// Function to search for books by title
function searchByTitle(searchTitle) {
    return library.filter(book => book.title.toLowerCase().includes(searchTitle.toLowerCase()));
}

// Function to search for books by author
function searchByAuthor(searchAuthor) {
    return library.filter(book => book.author.toLowerCase().includes(searchAuthor.toLowerCase()));
}

// Function to filter books with more than a specified number of pages
function filterBooksByPages(minPages) {
    return library.filter(book => book.pages > minPages);
}

// Function to transform book titles and authors by adding labels
function transformBooks() {
    return library.map(book => ({
        title: `Title: ${book.title}`,
        author: `Author: ${book.author}`,
        pages: book.pages
    }));
}

// Example usage of the digital library system
function runLibraryExample() {
    // Adding books to the library
    addBook('JavaScript: The Good Parts', 'Douglas Crockford', 176);
    addBook('Eloquent JavaScript', 'Marijn Haverbeke', 472);
    addBook('You Don\'t Know JS', 'Kyle Simpson', 278);
    addBook('The Catcher in the Rye', 'J.D. Salinger', 214);

    // Display all books
    console.log('\nLibrary Collection:');
    library.forEach(book => console.log(book.displayInfo()));

    // Search for books by title
    console.log('\nSearch by title "JavaScript":');
    searchByTitle('JavaScript').forEach(book => console.log(book.displayInfo()));

    // Search for books by author
    console.log('\nSearch by author "Kyle Simpson":');
    searchByAuthor('Kyle Simpson').forEach(book => console.log(book.displayInfo()));

    // Filter books with more than 100 pages
    console.log('\nBooks with more than 100 pages:');
    filterBooksByPages(100).forEach(book => console.log(book.displayInfo()));

    // Transform book titles and authors
    console.log('\nTransformed Books:');
    transformBooks().forEach(book => console.log(`${book.title}, ${book.author}`));
}

// Run the example
runLibraryExample();
