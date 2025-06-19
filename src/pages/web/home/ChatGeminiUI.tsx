/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useRef, useEffect } from "react";
import { X, Mic, MicOff } from "lucide-react";

type Message = {
	from: "user" | "ai";
	text: string;
};

// Declare SpeechRecognition type if not recognized by TypeScript
// Or simply use `any` for recognitionRef below
declare global {
	interface Window {
		webkitSpeechRecognition: any;
		SpeechRecognition: any;
	}
}

export default function ChatGemini() {
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState<Message[]>([]);
	const [isOpen, setIsOpen] = useState(true);
	const [listening, setListening] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	// Use any here to fix TS error for SpeechRecognition
	const recognitionRef = useRef<any>(null);

	useEffect(() => {
		ref.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	useEffect(() => {
		if (
			!("webkitSpeechRecognition" in window) &&
			!("SpeechRecognition" in window)
		) {
			console.warn("SpeechRecognition not supported in this browser.");
			return;
		}

		const SpeechRecognition =
			window.SpeechRecognition || window.webkitSpeechRecognition;
		recognitionRef.current = new SpeechRecognition();
		recognitionRef.current.continuous = false;
		recognitionRef.current.interimResults = false;
		recognitionRef.current.lang = "en-US";

		recognitionRef.current.onresult = (event: any) => {
			const transcript = event.results[0][0].transcript;
			setInput((prev) => (prev ? prev + " " : "") + transcript);
			setListening(false);
		};

		recognitionRef.current.onerror = (event: any) => {
			console.error("Speech recognition error", event.error);
			setListening(false);
		};

		recognitionRef.current.onend = () => {
			setListening(false);
		};
	}, []);

	const toggleListening = () => {
		if (listening) {
			recognitionRef.current?.stop();
			setListening(false);
		} else {
			recognitionRef.current?.start();
			setListening(true);
		}
	};

	const send = async () => {
		if (!input.trim()) return;

		const userMsg: Message = { from: "user", text: input };
		setMessages((prev) => [...prev, userMsg]);
		setInput("");

		try {
			const res = await fetch("/api/gemini", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ message: input }),
			});
			const data = await res.json();

			const aiMsg: Message = { from: "ai", text: data.reply };
			setMessages((prev) => [...prev, aiMsg]);

			// Text-to-Speech for AI reply
			if ("speechSynthesis" in window && data.reply) {
				const utterance = new SpeechSynthesisUtterance(data.reply);
				utterance.lang = "en-US";
				window.speechSynthesis.speak(utterance);
			}
		} catch (error) {
			console.error("Error sending message", error);
			setMessages((prev) => [
				...prev,
				{ from: "ai", text: "Sorry, something went wrong." },
			]);
		}
	};

	if (!isOpen) {
		return (
			<button
				onClick={() => setIsOpen(true)}
				className="fixed bottom-20 sm:bottom-5 cursor-pointer right-2 sm:right-5 bg-green-600 text-white px-4 py-2 rounded-full shadow z-[9999]"
			>
				Krishipath AI
			</button>
		);
	}

	return (
		<div className="fixed bottom-5 right-5 w-80 h-[500px] bg-white border border-green-500 rounded-xl shadow-lg flex flex-col z-[9999]">
			{/* Header */}
			<div className="bg-green-600 text-white px-4 py-2 rounded-t-xl flex justify-between items-center">
				<span className="font-bold">Krishipath AI</span>
				<button onClick={() => setIsOpen(false)}>
					<X className="w-5 h-5" />
				</button>
			</div>

			{/* Messages */}
			<div className="flex-1 p-3 overflow-y-auto bg-gray-50 space-y-2">
				{messages.map((m, i) => (
					<div
						key={i}
						className={`max-w-[80%] px-4 py-2 rounded-lg text-sm ${
							m.from === "user"
								? "bg-green-100 ml-auto text-right"
								: "bg-gray-200 text-left"
						}`}
					>
						{m.text}
					</div>
				))}
				<div ref={ref} />
			</div>

			{/* Input + Voice */}
			<div className="border-t border-green-500 p-3 flex gap-2 items-center">
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					onKeyDown={(e) => e.key === "Enter" && send()}
					placeholder="Type a message..."
					className="flex-grow px-3 py-2 border border-green-500 rounded-md text-sm"
					style={{ minWidth: 0 }} // prevent input overflow inside flex container
				/>
				<button
					onClick={toggleListening}
					className={`p-2 rounded-full flex-shrink-0 ${
						listening
							? "bg-red-600 text-white"
							: "bg-green-600 text-white"
					} hover:opacity-80`}
					aria-label="Toggle voice input"
				>
					{listening ? (
						<MicOff className="w-5 h-5" />
					) : (
						<Mic className="w-5 h-5" />
					)}
				</button>
				<button
					onClick={send}
					className="bg-green-600 text-white px-3 py-2 rounded-md text-sm hover:bg-green-700 flex-shrink-0"
				>
					Send
				</button>
			</div>
		</div>
	);
}
