const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { WeatherModel } = require("../models/Weather");

router.get("/", async (request, response, next) => {
  try {
    const db = await mongoose.connect(process.env.APP_DB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    const weather = await WeatherModel.find();

    if (weather) {
      return response.status(200).json(weather);
    }
  } catch (error) {
    return response.status(400).json(error);
  }
});

module.exports = router;
