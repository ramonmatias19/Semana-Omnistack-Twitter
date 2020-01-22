const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb+srv://ramon:ramon@cluster0-jmdqn.gcp.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(express.json());
app.use(require("./routes"));

app.listen(3000, () => {
  console.log("Server Started on port 3000");
});
