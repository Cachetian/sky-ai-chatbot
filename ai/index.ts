import { createOllama } from 'ollama-ai-provider';
import { experimental_wrapLanguageModel as wrapLanguageModel } from "ai";
import { customMiddleware } from "./custom-middleware";

let modelName: string = "";
if (process.env.Z_OPENAI_API_MODEL) {
  modelName = process.env.Z_OPENAI_API_MODEL;
}

const model = createOllama({
  baseURL: process.env.Z_OPENAI_API_URL,
})(modelName);

export const customModel = wrapLanguageModel({
  model: model,
  middleware: customMiddleware,
});
