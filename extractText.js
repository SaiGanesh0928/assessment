import pdf from "pdf-parse";
import Tesseract from "tesseract.js";

export async function extractText(base64, fileType) {
  const buffer = Buffer.from(base64, "base64");

  if (fileType === "application/pdf") {
    const data = await pdf(buffer);
    return data.text;
  }

  const result = await Tesseract.recognize(buffer, "eng");
  return result.data.text;
}
