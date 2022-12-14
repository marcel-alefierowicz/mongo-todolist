const express = require("express");
const Parser = require("body-parser");
const app = express();
const port = 3000;

const index = require("./routes/index");
const add = require('./routes/add');
const remove = require('./routes/remove');
const edit = require('./routes/edit');

app.set("view engine", "pug");
app.use(Parser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use("/", index);
app.use('/add', add);
app.use('/remove', remove);
app.use('/edit', edit)

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
