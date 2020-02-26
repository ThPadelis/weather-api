const mongoose = require("mongoose");
const { CitySchema } = require("./City");
const { ListITemSchema } = require("./ListItem");

const ItemSchema = mongoose.Schema(
  {
    code: { type: Number },
    message: { type: String },
    city: { type: CitySchema },
    cnt: { type: Number },
    list: { type: [ListITemSchema] }
  },
  { timestamps: true }
);

const ItemModel = mongoose.model("Item", ItemSchema);

module.exports = { ItemSchema, ItemModel };
