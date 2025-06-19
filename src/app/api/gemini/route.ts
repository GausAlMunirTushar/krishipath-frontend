/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	const { message } = await req.json();
	const apiKey = process.env.GEMINI_API_KEY;

	if (!message || typeof message !== "string" || message.trim() === "") {
		return NextResponse.json(
			{ reply: "Invalid message input" },
			{ status: 400 }
		);
	}

	try {
		const response = await fetch(
			`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					contents: [{ parts: [{ text: message }] }],
				}),
			}
		);

		console.log("Status:", response.status);
		const data = await response.json();
		console.log("Gemini Response:", JSON.stringify(data, null, 2));

		const reply =
			data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "No reply";
		return NextResponse.json({ reply });
	} catch (error: any) {
		console.error("Gemini Error:", error);
		return NextResponse.json(
			{ reply: "Failed to fetch from Gemini" },
			{ status: 500 }
		);
	}
}
