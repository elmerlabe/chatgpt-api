const chatgpt = require("../models/chatgpt");

const generateResponse = async (req, res) => {
  const userInput = req.body;

  //console.log(userInput);

  const response = await chatgpt.generateChatResponse(userInput);

  return res.json(response);
};

module.exports = { generateResponse };
