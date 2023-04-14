const express = require("express");
const {getTracksController, postNewTrack} = require("../controllers/tracks.controller")
const trackRouter = express.Router();


trackRouter.get("/music", getTracksController)
trackRouter.post("/music", postNewTrack)
module.exports = trackRouter;
