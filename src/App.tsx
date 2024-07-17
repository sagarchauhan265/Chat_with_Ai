import React, { useState } from 'react';
import './App.css';
import { callAPI } from './ApiCall';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput('');
      
      callAPI(input)
        .then((result) => {
          setMessages(prevMessages => [...prevMessages, result?.candidates[0]?.content?.parts[0]?.text]);
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <div className="App">
      <div className="chat-container">
        <p>Chat With Ai</p>
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className="message">
              {msg}
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type a message"
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
