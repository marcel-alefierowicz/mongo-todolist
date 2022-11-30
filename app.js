const express = require("express");
const Parser = require("body-parser");
const app = express();
const port = 3000;

const index = require("./routes/index.js");
const add = require('./routes/add.js');

app.set("view engine", "pug");
app.use(Parser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use("/", index);
app.use('/add', add);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
