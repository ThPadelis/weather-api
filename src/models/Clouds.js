const mongoose = require("mongoose");

const CloudSchema = mongoose.Schema(
  {
    all: Number
  },
  { _id: false }
);

const CloudModel = mongoose.model("Clouds", CloudSchema);

module.exports = { CloudSchema, CloudModel };
