const express = require("express");
const chatController = require("../controller/generateResponse");

const router = express.Router();

router.post("/chat", chatController.generateResponse);

module.exports = router;
