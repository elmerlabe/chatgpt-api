const express = require("express");

const app = express();

const cors = require("cors");
const apiRoutes = require("./routes/api");

app.use(cors());
app.use(express.json());
app.use("/api", apiRoutes);

module.exports = app;
