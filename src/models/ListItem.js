const mongoose = require("mongoose");
const { MainSchema } = require("./Main");
const { WeatherSchema } = require("./Weather");
const { CloudSchema } = require("./Clouds");
const { WindSchema } = require("./Wind");
const { SysSchema } = require("./Sys");

const ListITemSchema = mongoose.Schema(
  {
    dt: { type: Number },
    main: { type: MainSchema },
    weather: { type: [WeatherSchema] },
    clouds: { type: CloudSchema },
    wind: { type: WindSchema },
    sys: { type: SysSchema },
    dt_txt: { type: String }
  },
  { _id: false }
);

const ListItemModel = mongoose.model("ListItem", ListITemSchema);

module.exports = { ListITemSchema, ListItemModel };
