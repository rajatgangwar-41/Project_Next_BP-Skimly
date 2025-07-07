import { GoogleGenAI } from "@google/genai"
import { SUMMARY_SYSTEM_PROMPT } from "@/utils/prompts"

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })

export async function generateSummaryFromGeminiAI(
  pdfText: string
): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      config: {
        // systemInstruction: SUMMARY_SYSTEM_PROMPT,
        temperature: 0.7,
        maxOutputTokens: 1500,
        topP: 0.95,
        topK: 40,
        thinkingConfig: {
          thinkingBudget: 0, // Disables thinking
        },
      },
      contents: [
        {
          role: "user",
          parts: [
            {
              text: SUMMARY_SYSTEM_PROMPT,
            },
            {
              text: `Transform this document into an engaging, easy-to-read summary with contextually relevant emojis and proper markdown formatting:\n\n${pdfText}`,
            },
          ],
        },
      ],
    })

    console.log("Response From Gemini AI", response)

    if (!response.text) {
      throw new Error("Empty response from Gemini API")
    }

    console.log("🚀 ~ response.text:", response.text)
    return response.text
  } catch (error: any) {
    console.error("Gemini API Error:", error)
    throw error
  }
}
