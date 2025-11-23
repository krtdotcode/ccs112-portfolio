import React, { useState } from 'react';
import './Chatbot.css';
import { getChatbotResponse, delay } from './chatbotUtils';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hi! I'm krt.ai, Kurt's virtual assistant. Ask me anything about Kurt.", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = input;
    setMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);
    setInput('');

    setMessages(prev => [...prev, { text: 'Thinking...', sender: 'bot' }]);

    await delay(1000 + Math.random() * 1000);
    const response = getChatbotResponse(userMessage);
    setMessages(prev => {
      const newMessages = [...prev];
      newMessages[newMessages.length - 1] = { text: response, sender: 'bot' };
      return newMessages;
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="chatbot">
      <div className="chatbot-header">
        <h2>krt.ai</h2>
      </div>
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          placeholder="Ask about Kurt..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
