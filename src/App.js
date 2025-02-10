import React, { useState } from "react";
import axios from "axios";
import { Send, MessageCircle } from "lucide-react";
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");
    try {
      const response = await axios.post("http://localhost:5000/chat", {
        message: input,
      });
      const botReply = response.data.botReply;
      setMessages([...newMessages, { text: formatResponse(botReply), sender: "bot" }]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const formatResponse = (response) => {
    const paragraphs = response.split('\n').map((line, index) => (
      <p key={index} className="mb-2">{line}</p>
    ));
    return <div>{paragraphs}</div>;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
      <div className="w-full max-w-2xl bg-gray-800 rounded-3xl shadow-xl p-8">
        <h2 className="text-white text-3xl font-bold flex items-center gap-3 mb-6">
          <MessageCircle className="w-8 h-8 text-white" /> AI Chatbot
        </h2>
        <div className="chatbox h-96 overflow-y-auto p-6 rounded-lg bg-gray-700 scrollbar-hide">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-4 my-2 w-fit max-w-xs rounded-lg text-white transition-transform transform ${
                msg.sender === "user"
                  ? "bg-gray-600 ml-auto hover:scale-105"
                  : "bg-gray-900 hover:scale-105"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="flex mt-6 gap-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-4 bg-gray-700 rounded-xl text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors duration-300"
          />
          <button
            onClick={sendMessage}
            className="p-4 bg-gray-600 rounded-xl shadow-lg hover:bg-gray-500 transition-transform transform active:scale-95"
          >
            <Send className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
