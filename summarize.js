import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateSummary(text, length = "medium") {
  let instruction = "";

  if (length === "short") instruction = "Summarize in 3–4 lines.";
  if (length === "medium") instruction = "Summarize in 8–10 lines.";
  if (length === "long") instruction = "Provide a detailed long summary.";

  const response = await client.responses.create({
    model: "gpt-4.1",
    input: [
      { role: "system", content: "You are an expert summarizer." },
      { role: "user", content: `${instruction}\n\nText:\n${text}` }
    ]
  });

  return response.output_text; // NEW way to read output
}
