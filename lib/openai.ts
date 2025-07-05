import { SUMMARY_SYSTEM_PROMPT } from "@/utils/prompts"
import OpenAI from "openai"
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export async function generateSummaryFromOpenAI(pdfText: string) {
  try {
    const response = await client.responses.create({
      model: "gpt-4.1",
      input: [
        {
          role: "system",
          content: SUMMARY_SYSTEM_PROMPT,
        },
        {
          role: "user",
          content: `Transform this document into an engaging, easy-to-read summary with contextually relevant emojis and proper markdown formatting:\n\n${pdfText}`,
        },
      ],
      temperature: 0.7,
      max_output_tokens: 1500,
    })
    console.log("🚀 ~ response:", response)
    console.log("🚀 ~ responseOutputText:", response?.output_text)

    return response
  } catch (error: any) {
    if (error?.status === 429) throw new Error("RATE_LIMIT_EXCEEDED")
    throw error
  }
}
