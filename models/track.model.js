const mongoose = require("mongoose");

const TrackSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },

  description: {
    type: String,
  },

  author: {
    type: String,
  },

  date: {
    type: [Date, String],
  }
});

module.exports = mongoose.model("music", TrackSchema);
