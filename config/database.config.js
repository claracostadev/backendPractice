const mongoose = require("mongoose");

const db = () => {
  try {
    mongoose.connect(
      "mongodb+srv://claracostadev:SL7iykYMomeYbPco@cluster0.kriffua.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Conectado con mongodb atlas");
  } catch (error) {
    console.log(error);
    throw new Error("Internal server error: Database cannot conecting");
  }
};

module.exports = db;
