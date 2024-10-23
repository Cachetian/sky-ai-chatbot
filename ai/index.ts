import { openai, createOpenAI } from "@ai-sdk/openai";
import { experimental_wrapLanguageModel as wrapLanguageModel } from "ai";
import { customMiddleware } from "./custom-middleware";

const model = createOpenAI({
  baseURL: 'http://127.0.0.1:11434/v1/',
  apiKey: 'ollama'
}).chat("llama3.1");

export const customModel = wrapLanguageModel({
  model: model,
  middleware: customMiddleware,
});
