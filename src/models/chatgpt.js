require("dotenv").config();
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const generateChatResponse = async (userInput) => {
  try {
    const response = await openai.chat.completions.create({
      model: userInput.model,
      messages: userInput.messages,
      temperature: userInput.temperature,
      max_tokens: userInput.maxTokens,
    });

    return response.choices[0];
  } catch (error) {
    console.error(error);
  }
};

module.exports = { generateChatResponse };
