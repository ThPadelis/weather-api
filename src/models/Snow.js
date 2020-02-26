const mongoose = require("mongoose");

const SnowSchema = mongoose.Schema(
  {
    "3h": Number
  },
  { _id: false }
);

const SnowModel = mongoose.model("Snow", SnowSchema);

module.exports = { SnowSchema, SnowModel };
