const BookModel = require("../models/bookModel");

exports.CreateBook = async (book) => {
  const bookToAdd = new BookModel(book);
  return await bookToAdd.save();
};

// module.exports = class BookService {
//   CreateBook(book) {}
// };
