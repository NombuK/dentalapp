import React, { useState } from "react";
import axios from "axios";
import Typewriter from "typewriter-effect";

export default function Athena() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "Athena",
      text: "Hi, welcome to Athena, your dental assistant. Please note that i am a world wide assistance and might not have answers specifically for LumiDental. How may I help you today",
    },
  ]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleChatbot = () => setIsOpen(!isOpen);

  const handleInputChange = (e) => setUserInput(e.target.value);

  const handleSend = async (event) => {
    event.preventDefault();

    if (userInput.trim()) {
      
      const userMessage = { sender: "User", text: userInput };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

     
      const apiKey = "4obaa93faa4d0abd12t05933a7d742d3";
      const prompt = `Generate general dental answers on ${userInput}`;
      const context =
        "You are a dentist call center and you always have short answers to motivate people and answer them accordingly. User instructions are: Your mission is to generate a short answer. Make sure to follow user instructions.";
      const apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

      
      setLoading(true);
      setUserInput("");

      try {
        const response = await axios.get(apiUrl);
        const botMessage = {
          sender: "Athena",
          text:
            response.data.answer || "Sorry, I could not retrieve an answer.",
        };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } catch (error) {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            sender: "Athena",
            text: "Sorry, there was an error retrieving the response.",
          },
        ]);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div>
      <button className="chat-button" onClick={toggleChatbot}>
        💬 Chat with Athena
      </button>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h4>Athena - Dental Assistant</h4>
            <button onClick={toggleChatbot}>✖</button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.sender.toLowerCase()}`}
              >
                <strong>{msg.sender}:</strong>
                <Typewriter
                  options={{
                    strings: msg.text,
                    autoStart: true,
                    cursor: " ",
                    delay: 20,
                  }}
                />
              </div>
            ))}
            {loading && <div className="message athena">Typing...</div>}
          </div>

          <form className="chatbot-input" onSubmit={handleSend}>
            <input
              type="text"
              value={userInput}
              onChange={handleInputChange}
              placeholder="Type your question..."
              disabled={loading}
            />
            <button type="submit" disabled={loading}>
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
