import { useState } from 'react';

export default function MessageInput({ currentChannel, sendMessage, setTyping }) {

  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!message.trim()) return;

    sendMessage(message);
    setMessage("");
  };

  const handleChange = (value) => {

    setMessage(value);
    setTyping(true);
  };

  return (
    <div className="message-input-container">

      <form onSubmit={handleSubmit}>

        <input
          className="message-input"
          value={message}
          onChange={(e) => handleChange(e.target.value)}
          placeholder={`Écrire dans #${currentChannel?.name || "..."}`}
          disabled={!currentChannel}
        />

      </form>

    </div>
  );
}