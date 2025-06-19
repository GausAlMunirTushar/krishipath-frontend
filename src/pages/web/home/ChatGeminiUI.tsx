"use client";

import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";

type Message = {
	from: "user" | "ai";
	text: string;
};

export default function ChatGemini() {
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState<Message[]>([]);
	const [isOpen, setIsOpen] = useState(true);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		ref.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	const send = async () => {
		if (!input.trim()) return;

		const userMsg: Message = { from: "user", text: input };
		setMessages((prev) => [...prev, userMsg]);
		setInput("");

		const res = await fetch("/api/gemini", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ message: input }),
		});
		const data = await res.json();

		setMessages((prev) => [...prev, { from: "ai", text: data.reply }]);
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

			{/* Input */}
			<div className="border-t border-green-500 p-3 flex gap-2">
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					onKeyDown={(e) => e.key === "Enter" && send()}
					placeholder="Type a message..."
					className="flex-1 px-3 py-2 border border-green-500 rounded-md text-sm"
				/>
				<button
					onClick={send}
					className="bg-green-600 text-white px-3 py-2 rounded-md text-sm hover:bg-green-700"
				>
					Send
				</button>
			</div>
		</div>
	);
}
