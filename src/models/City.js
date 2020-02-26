const mongoose = require("mongoose");
const { CoordSchema } = require("./Coord");

const CitySchema = mongoose.Schema(
  {
    id: { type: Number },
    name: { type: String },
    coord: { type: CoordSchema },
    country: { type: String },
    timezone: { type: Number },
    sunrise: { type: Number },
    sunset: { type: Number }
  },
  { _id: false }
);

const CityModel = mongoose.model("City", CitySchema);

module.exports = { CitySchema, CityModel };
