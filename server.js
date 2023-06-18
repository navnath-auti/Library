const express = require("express");
const app = express();
const config = require("./configurations/config");
const bookRouter = require("./Routes/book");
const mongoose = require("mongoose");

app.use(express.json());
app.use(bookRouter);

mongoose
  .connect(config.connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  })
  .then(() => {
    console.log("Database connection is established");
    app.listen(config.port, () => {
      console.log("App listening on port " + config.port);
    });
  })
  .catch((err) => {
    console.error(err);
    console.log("Error connecting to DB");
  });

// app.use(studentRouter);
