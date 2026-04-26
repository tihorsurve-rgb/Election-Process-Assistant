import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyC301Lm-ksAKyYsG4RRQrZfwowRbCWoC3E";
const genAI = new GoogleGenerativeAI(API_KEY);

async function test() {
  try {
    console.log("Listing models...");
    const models = await genAI.listModels();
    console.log("Models found:");
    models.models.forEach(m => console.log(`- ${m.name}`));
  } catch (err) {
    console.error("Error listing models:", err);
  }
}

test();
