export default class BookStorage {
  static saveData(bookArray) {
    localStorage.setItem('bookData', JSON.stringify(bookArray));
  }

  static getData() {
    return JSON.parse(localStorage.getItem('bookData'));
  }
}
