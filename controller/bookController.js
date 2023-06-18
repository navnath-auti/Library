const bookService = require("../services/bookService");

exports.CreateBook = async (req, res, next) => {
  // call service
  let book = req.body;
  const result = await bookService.CreateBook(book);

  if (result) {
    res.send(result);
  } else {
    res.send("Error");
  }
};
