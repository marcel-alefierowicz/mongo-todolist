const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/dane");

const Schema = mongoose.Schema(
  {
    title:String,
    content: String,
    created_at: Date,
    due_date: Date,
    done: Boolean
  },
  { collection: "ToDo" }
);

module.exports = mongoose.model("db", Schema);
