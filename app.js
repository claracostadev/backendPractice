const express = require("express")
const app = express();
const db = require("./config/database.config");
const trackRouter = require("./routes/tracks.route");
const bodyParser = require("body-parser");
app.get("/", (req, res) => {
  res.send("home");
});

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())



 app.use(trackRouter);
db();


app.listen(5030, () => {
    console.log("Servidor funcionando")
});