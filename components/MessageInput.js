import { useState } from 'react';

export default function MessageInput({ currentChannel }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && currentChannel) {
      console.log(`Message envoyé dans ${currentChannel.name}:`, message);
      setMessage('');
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={`Écrire un message dans ${currentChannel?.name || "..."}`}
          style={styles.input}
          disabled={!currentChannel}
        />
        <button type="submit" style={styles.button} disabled={!currentChannel}>
          Envoyer
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#40444b',
    padding: '16px',
    borderTop: '1px solid #202225',
  },
  form: {
    display: 'flex',
  },
  input: {
    flex: 1,
    padding: '10px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#36393f',
    color: '#dcddde',
    outline: 'none',
  },
  button: {
    marginLeft: '8px',
    padding: '10px 16px',
    backgroundColor: '#5865f2',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};
