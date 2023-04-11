const express = require("express");
const {getTracksController, postNewTrack} = require("../controllers/tracks.controller")
const trackRouter = express.Router();

const music = [
  {
      name: "cancion 1",
      id: 1,
      año: 2022
  },
  {
      name: "cancion 2",
      id: 2,
      año: 2003
  },
  {
      name: "cancion 3",
      id: 3,
      año: 2013
  }
]

trackRouter.get("/music", getTracksController)
trackRouter.post("/music", postNewTrack)
module.exports = trackRouter;
