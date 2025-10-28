require("dotenv").config();
const connectdb = require("./util/db/connect.js");
const app = require("./app.js");

const PORT = process.env.PORT | 8000;
const MONGODB_URI = process.env.MONGODB_URI;

connectdb(MONGODB_URI);

app.listen(PORT, (err) => {
  if (err) {
    console.log(err.message);
  }
  console.log(`Server is listening on ${PORT}`);
});
