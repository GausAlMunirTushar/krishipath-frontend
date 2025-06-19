"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

type Message = {
	from: "user" | "ai";
	text: string;
};

const ChatUI = () => {
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState<Message[]>([]);
	const [open, setOpen] = useState(true);
	const messagesEndRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	const sendMessage = async () => {
		if (!input.trim()) return;

		const userMessage: Message = { from: "user", text: input };
		setMessages((prev) => [...prev, userMessage]);
		setInput("");

		const res = await fetch("/api/chat", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ message: input }),
		});

		const data = await res.json();
		const aiMessage: Message = { from: "ai", text: data.reply };
		setMessages((prev) => [...prev, aiMessage]);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") sendMessage();
	};

	if (!open) {
		return (
			<button
				onClick={() => setOpen(true)}
				className="fixed bottom-6 right-6 z-[9999] bg-green-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-700"
			>
				Krishipath AI Chat
			</button>
		);
	}

	return (
		<div className="fixed bottom-6 right-6 w-80 h-[500px] bg-white border border-gray-300 rounded-xl shadow-2xl flex flex-col z-[9999]">
			{/* Header */}
			<div className="bg-green-600 text-white px-4 py-3 flex justify-between items-center rounded-t-xl">
				<h2 className="font-bold">Krishipath AI</h2>
				<button onClick={() => setOpen(false)}>
					<X className="w-5 h-5" />
				</button>
			</div>

			{/* Messages */}
			<div className="flex-1 overflow-y-auto p-3 space-y-2 bg-gray-50">
				{messages.map((msg, idx) => (
					<div
						key={idx}
						className={`px-4 py-2 rounded-lg max-w-[80%] text-sm ${
							msg.from === "user"
								? "bg-green-200 ml-auto text-right"
								: "bg-white text-left border"
						}`}
					>
						{msg.text}
					</div>
				))}
				<div ref={messagesEndRef} />
			</div>

			{/* Input */}
			<div className="border-t p-3 flex gap-2">
				<input
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					onKeyDown={handleKeyDown}
					placeholder="Type a message..."
					className="flex-1 px-3 py-2 border rounded-md outline-none text-sm"
				/>
				<button
					onClick={sendMessage}
					className="bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700"
				>
					Send
				</button>
			</div>
		</div>
	);
};

export default ChatUI;
