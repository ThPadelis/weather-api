const mongoose = require("mongoose");

const WindSchema = mongoose.Schema(
  {
    speed: Number,
    deg: Number
  },
  { _id: false }
);

const WindModel = mongoose.model("Wind", WindSchema);

module.exports = { WindSchema, WindModel };
