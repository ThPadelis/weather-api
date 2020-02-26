const mongoose = require("mongoose");

const RainSchema = mongoose.Schema(
  {
    "3h": Number
  },
  { _id: false }
);

const RainModel = mongoose.model("Rain", RainSchema);

module.exports = { RainSchema, RainModel };
