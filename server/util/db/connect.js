const mongoose = require("mongoose");

function connectdb(uri) {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("Successfully connected to MongoDB");
    })
    .catch((err) => {
      console.log("Failed to connect MongoDB");
    });
}

module.exports = connectdb;
