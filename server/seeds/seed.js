const { connectdb } = require("../util/db/connect.js");
require("dotenv").config();

const MONGODB_URI = process.env.MONGODB_URI;
connectdb(MONGODB_URI);
