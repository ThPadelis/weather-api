const mongoose = require("mongoose");

const CoordSchema = mongoose.Schema(
  {
    lat: { type: Number },
    lon: { type: Number }
  },
  { _id: false }
);

const CoordModel = mongoose.model("Coord", CoordSchema);

module.exports = { CoordSchema, CoordModel };
