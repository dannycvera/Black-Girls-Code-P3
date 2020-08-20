const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Event = new Schema(
  {
    imgURL: { type: String, required: true },
    title: { type: String, required: true },
    funds: { type: Number, required: true },
    content: { type: String, required: true },
    quote: { type: String, required: true },
    author: { type: String, required: true },
    age: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("events", Event);
