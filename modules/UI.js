import { BookStorage} from "../modules/BookStorage.js";

class UI {

  static removeBook(e, btn, index, bookArray) {
    const bookDiv = e.target.parentElement;
    bookDiv.parentElement.removeChild(bookDiv);

    bookArray = bookArray.filter((ele, idx) => {
      return idx !== index;
    });

    BookStorage.saveData(bookArray);
    this.getBookList(bookArray);
  }

  static getBookList(bookArray) {
    let books = '';
    bookArray.forEach((book) => {
      books += `<div class="book-div">
      <h3 class="book-title-author">${book.title} By ${book.author}</h3>
      <button class="btn btn-remove" type="button">Remove</button>
    </div>`;
    });

    const bookDisplay = document.querySelector('.book-display');
    bookDisplay.innerHTML = books;

    const removeBtn = document.querySelectorAll('.btn-remove');
    removeBtn.forEach((btn, index) => {
      btn.addEventListener('click', (e) => {
        this.removeBook(e, btn, index, bookArray);
      });
    });
  }
}

export {UI};