const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Dane");

const Schema = mongoose.Schema(
  {
    title: String,
    content: String,
    created_at: Date,
    finished_at: Date,
  },
  { collection: "ToDo" }
);

module.exports = mongoose.model("Baza", Schema);
