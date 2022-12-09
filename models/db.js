const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/dane");

const Schema = mongoose.Schema(
  {
    content: String,
    created_at: Date,
    finished_at: Date,
  },
  { collection: "ToDo" }
);

module.exports = mongoose.model("db", Schema);
