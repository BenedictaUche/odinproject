
document.querySelector('.button').addEventListener('click', function (e) {
    e.preventDefault()
    document.body.classList.add('active-popup')
})
document.querySelector('.popup .close-btn').addEventListener('click', function (e) {
    e.preventDefault()
    document.body.classList.remove('active-popup')
})
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages + ' pg';
        this.read = read;
    }
}

let myLibrary = [];

function addBookToLibrary(e) {
    e.preventDefault();
    const form = document.querySelector('form');
    const title = form.title.value;
    const author = form.author.value;
    const pages = form.pages.value;
    const read = form.read.checked;
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBooks();
    form.reset(); // Resets the form after submission
}

const form = document.querySelector('form');
form.addEventListener('submit', addBookToLibrary);

const display = document.querySelector('.card');

function displayBooks() {
    display.innerHTML = ''; // Clear the display before re-rendering
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
        if (myLibrary[i].read === false) {
            bookRead.textContent = 'Not read';
            bookRead.style.backgroundColor = 'red';
        } else {
            bookRead.textContent = 'Read';
            bookRead.style.backgroundColor = '#d3d3d3';
        }
        bookRead.addEventListener('click', () => {
            myLibrary[i].read = !myLibrary[i].read;
            displayBooks(); // Update the display after changing the read status
        });

        const removeBook = document.createElement('button');
        removeBook.classList.add('remove');
        removeBook.textContent = 'Remove Book';
        removeBook.addEventListener('click', function () {
            myLibrary.splice(i, 1);
            displayBooks(); // Update the display after removing the book
        });

        bookDiv.appendChild(bookTitle);
        bookDiv.appendChild(bookAuthor);
        bookDiv.appendChild(bookPages);
        bookDiv.appendChild(bookRead);
        bookDiv.appendChild(removeBook);

        display.appendChild(bookDiv);
    }
}


