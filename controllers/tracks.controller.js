const TrackSchema = require("../models/track.model");
const tracks = require("../models/tracks.model");

const postNewTrack = async (req, res) => {
  try {
    await TrackSchema.create(req.body);
    return res.status(200).json({ message: "canción guardada" });
  } catch (error) {
    return res.status(500).json({ message: "Error del servidor" });
  }
};

const getTracksController = async (req, res) => {
  try {
    const tracks = await TrackSchema.find()
    res.status(200).json(tracks)
  } catch (error) {
    res.status(500).json({message: "Internal server error"})
  }
};

module.exports = { getTracksController, postNewTrack };
