// myLibrary = []
// let submit = 'yes'

// function addBookToLibrary() {
//     const bookTitle = prompt('What is the book title');
//     const bookAuthor = prompt('Book author');
//     const noPages = prompt('No. of pages');
//     const haveRead = prompt('Have you read it? (yes or no)');

//     const book = {
//         title: bookTitle,
//         author: bookAuthor,
//         pages: noPages,
//         read: haveRead === 'yes'
//     };

//     myLibrary.push(book);
// }
// while (submit !== 'no') {
//     addBookToLibrary();
//     submit = prompt('Do you want to submit another book? (yes or no)');
// }
// function displayBooks() {
//     cards.innerHTML = '';
//     for (let i = 0; i < myLibrary.length; i++) {
//         const book = myLibrary[i];
//         const card = document.createElement('div');
//         card.classList.add('col-2', 'card');
//         const bookImage = document.createElement('img');
//         bookImage.classList.add('img-fluid');
//         bookImage.setAttribute('src', 'https://images.unsplash.com/photo-1603162532773-8bcf72814836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bm92ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60');
//         const bookInfo = document.createElement('div');
//         const bookTitle = document.createElement('p');
//         bookTitle.classList.add('title');
//         bookTitle.textContent = book.title;
//         const bookAuthor = document.createElement('p');
//         bookAuthor.classList.add('author');
//         bookAuthor.textContent = book.author;
//         const bookPages = document.createElement('p');
//         bookPages.classList.add('pages');
//         bookPages.textContent = `${book.pages} pages`;
//         const bookRead = document.createElement('p');
//         bookRead.classList.add('read');
//         bookRead.textContent = book.read ? 'Read' : 'Unread';
//         bookInfo.appendChild(bookTitle);
//         bookInfo.appendChild(bookAuthor);
//         bookInfo.appendChild(bookPages);
//         bookInfo.appendChild(bookRead);
//         card.appendChild(bookImage);
//         card.appendChild(bookInfo);
//         cards.appendChild(card);
//     }
// }
// // console.log(myLibrary)
// // displayBooks()

// // class Book {
// //     constructor(title, author, pages, read) {
// //         this.title = title;
// //         this.author = author;
// //         this.pages = pages;
// //         this.read = read;
// //     }
// // }

// // class Library {
// //     constructor() {
// //         this.books = [];
// //     }

// //     addBook(book) {
// //         this.books.push(book);
// //     }

// //     removeBook(book) {
// //         this.books = this.books.filter((b) => b !== book);
// //     }
// // }


document.querySelector('.button').addEventListener('click', function (e) {
    e.preventDefault()
    document.body.classList.add('active-popup')
})
document.querySelector('.popup .close-btn').addEventListener('click', function (e) {
    e.preventDefault()
    document.body.classList.remove('active-popup')
})

myLibrary = [];
function addBookToLibrary() {
    const bookTitle = prompt('What is the book title');
    const bookAuthor = prompt('Book author');
    const noPages = prompt('No. of pages');
    const haveRead = prompt('Have you read it? (yes or no)');

    const book = {
        title: bookTitle,
        author: bookAuthor,
        pages: noPages,
        read: haveRead === 'yes',
    };

    myLibrary.push(book);
}

let submit = '';
while (submit !== 'no') {
    addBookToLibrary();
    submit = prompt('Do you want to submit another book? (yes or no)');
}

const display = document.querySelector('.card');

for (let i = 0; i < myLibrary.length; i++) {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('input-content');

    const bookTitle = document.createElement('h2');
    bookTitle.classList.add('title');
    bookTitle.textContent = myLibrary[i].title;

    const bookAuthor = document.createElement('p');
    bookAuthor.classList.add('author');
    bookAuthor.textContent = myLibrary[i].author;

    const bookPages = document.createElement('p');
    bookPages.classList.add('pages');
    bookPages.textContent = myLibrary[i].pages;

    const bookRead = document.createElement('button');
    bookRead.classList.add('read');
    bookRead.textContent = 'Read: ' + (myLibrary[i].read ? 'Yes' : 'No');

    const removeBook = document.createElement('button')
    removeBook.classList.add('remove');
    removeBook.textContent = 'Remove Book'
    removeBook.addEventListener('click', function () {
        myLibrary.splice(i, 1);
        display.removeChild(bookDiv); // also remove the book from the display
    });


    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(bookPages);
    bookDiv.appendChild(bookRead);
    bookDiv.appendChild(removeBook);

    display.appendChild(bookDiv);
}

// const title = document.querySelector('.title-input')
// const author = document.querySelector('.author-input')
// const page = document.querySelector('.page-input')
// const read = document.querySelector('read-input')


// document.querySelector('#submit').addEventListener('click',function(e){
//     e.preventDefault()

// })
