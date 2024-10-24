import { openai, createOpenAI } from "@ai-sdk/openai";
import { experimental_wrapLanguageModel as wrapLanguageModel } from "ai";
import { customMiddleware } from "./custom-middleware";

let modelName: string = "";
if (process.env.Z_OPENAI_API_MODEL) {
  modelName = process.env.Z_OPENAI_API_MODEL;
}
const model = createOpenAI({
  baseURL: process.env.Z_OPENAI_API_URL,
  apiKey: process.env.Z_OPENAI_API_KEY
}).chat(modelName);

export const customModel = wrapLanguageModel({
  model: model,
  middleware: customMiddleware,
});
