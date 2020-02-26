const express = require("express");
const router = express.Router();
const { connect } = require("../utils/helpers");
const { ItemModel } = require("../models/Item");

router.get("/", async (request, response, next) => {
  try {
    const db = await connect();
    const items = await ItemModel.find();
    db.connection.close();
    return response.status(200).json(items);
  } catch (error) {
    return response
      .status(500)
      .json({ error, message: "Failed to connect with database" });
  }
});

module.exports = router;
