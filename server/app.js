const express = require("express");
const userRoutes = require("./features/user/user.routes");

const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
  return res.send("Key-Sensie API");
});

app.use("/api/user", userRoutes);

module.exports = app;
