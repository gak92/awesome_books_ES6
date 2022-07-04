import { Books } from "../modules/Books.js";
import { BookStorage} from "../modules/BookStorage.js";
import { UI } from "../modules/UI.js";
import { DateTime } from "../modules/luxon.js";

let bookArray = [];
const btnSubmit = document.querySelector('.btn-submit');

// Clear the input fields
const clearFields = () => {
  document.querySelector('.form-title').value = '';
  document.querySelector('.form-author').value = '';
}

// Add book when click on form submit button
btnSubmit.addEventListener('click', () => {
  const title = document.querySelector('.form-title').value;
  const author = document.querySelector('.form-author').value;
  let bookid = 0;
  
  bookArray = BookStorage.getData();
  if (bookArray !== null && bookArray.length > 0) {
    const lastBook = bookArray[bookArray.length - 1];
    bookid = lastBook.bookid + 1; 
  } else {
    bookid = 1;
    bookArray = [];
  }
  
  const bookObj = new Books(bookid, title, author);
  bookArray.push(bookObj);
  BookStorage.saveData(bookArray);
  UI.getBookList(bookArray);
  clearFields();
});

// Load Books into UI if there is any
if (BookStorage.getData() !== null) {
  UI.getBookList(BookStorage.getData());
}

// Navigation List EventListener
const navList = document.querySelector('.navlist');
navList.addEventListener('click', (e) => {
  UI.showSection(e.target.id);
});

// show Time
const showTime = document.querySelector('.show-time');

const displayTime = () => {
  const dt = DateTime.now();
  showTime.innerHTML = dt.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
}

setInterval(displayTime, 1000);
