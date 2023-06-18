const express = require("express");
const router = express.Router();
const BookController = require("../controller/bookController");

// const bookController = new BookController();

router.post("/book/create", BookController.CreateBook);

module.exports = router;
