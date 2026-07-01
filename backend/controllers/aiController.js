import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `
You are Bharat-Mitra AI.

Your job is to help Indian citizens regarding:
- Government schemes
- Complaints
- Government services
- Documents
- Public welfare

Answer clearly in simple English.
User: ${message}
`;

    const result = await model.generateContent(prompt);

    const response = result.response.text();

    res.json({
      success: true,
      reply: response,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Gemini Error",
    });
  }
};