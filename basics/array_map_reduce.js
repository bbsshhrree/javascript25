const library = [{
    Booktitle: 'The Road Ahead',
    BookGenre: 'Non-Fiction',
    BookAuthor: 'Bill Gates',
    BookYear: 1995,
    BookPrice: 29.99
}, {
    Booktitle: 'Walter Isaacson',
    BookGenre: 'Non-Fiction',
    BookAuthor: 'Steve Jobs',
    BookYear: 2011,
    BookPrice: 14.99
}, {
    Booktitle: 'Mockingjay: The Final Book of The Hunger Games',
    BookGenre: 'Fiction',
    BookAuthor: 'Suzanne Collins',
    BookYear: 2010,
    BookPrice: 12.99

}, {
    Booktitle: 'The Martian',
    BookGenre: 'Science Fiction',
    BookAuthor: 'Andy Weir',
    BookYear: 2011,
    BookPrice: 9.99
}];
// const bookarray= library.map( (book) =>{ book.BookPrice = book.BookPrice - 5; return book;});
// const bookarray = library.filter((book) =>book.BookYear > 2000);
const bookarray = library.reduce((acc, book) => {
    return acc + book.BookPrice;
}, 0);
console.log(bookarray);