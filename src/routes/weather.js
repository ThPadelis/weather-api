const express = require("express");
const router = express.Router();
const { connect } = require("../utils/helpers");
const { ItemModel } = require("../models/Item");

router.get("/", async (request, response, next) => {
  try {
    const db = await connect();
  } catch (error) {
    return response.json({ error, message: "Failed to connect with database" });
  }

  const items = await ItemModel.find();
  return response.status(200).json(items);
});

module.exports = router;
