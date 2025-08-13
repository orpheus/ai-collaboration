import React, { useState } from 'react';
import './ChatInterface.css';

function ChatInterface() {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const userMessage = { type: 'user', content: query };
    setMessages(prev => [...prev, userMessage]);
    setQuery('');
    setLoading(true);

    try {
      const response = await fetch(`http://localhost:8080/chatWithFramework?query=${encodeURIComponent(query)}`);
      const data = await response.json();
      
      if (response.ok) {
        setMessages(prev => [...prev, { type: 'assistant', content: data.response }]);
      } else {
        setMessages(prev => [...prev, { type: 'error', content: data.error || 'Failed to get response' }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { type: 'error', content: 'Network error: ' + error.message }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-interface">
      <h2>Chat with Framework Assistant</h2>
      <p className="description">Ask questions about disability accommodations and success enablers</p>
      
      <div className="messages-container">
        {messages.length === 0 && (
          <div className="welcome-message">
            <p>Welcome! Try asking about:</p>
            <ul>
              <li>Workplace accommodations</li>
              <li>Communication support</li>
              <li>Physical accessibility</li>
            </ul>
          </div>
        )}
        
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.type}`}>
            <div className="message-label">
              {message.type === 'user' ? 'You' : message.type === 'assistant' ? 'Assistant' : 'Error'}
            </div>
            <div className="message-content">{message.content}</div>
          </div>
        ))}
        
        {loading && (
          <div className="message assistant loading">
            <div className="message-label">Assistant</div>
            <div className="message-content">Thinking...</div>
          </div>
        )}
      </div>
      
      <form onSubmit={handleSubmit} className="chat-form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask about accommodations..."
          disabled={loading}
        />
        <button type="submit" disabled={loading || !query.trim()}>
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatInterface;