import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
	const { message } = await req.json();

	try {
		const response = await openai.chat.completions.create({
			messages: [{ role: "user", content: message }],
			model: "gpt-3.5-turbo",
		});

		const aiMessage =
			response.choices[0]?.message.content ?? "No response.";
		return NextResponse.json({ reply: aiMessage });
	} catch (error) {
		console.error("Error:", error);
		return NextResponse.json(
			{ reply: "AI failed to respond." },
			{ status: 500 }
		);
	}
}
