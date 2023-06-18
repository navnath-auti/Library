const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: String,
  author: String,
  numberofPages: Number,
  summary: String,
});

const BookModel = mongoose.model("Book", bookSchema);

module.exports = BookModel;
