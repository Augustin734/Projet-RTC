export default function ChatArea({ currentChannel }) {
  return (
    <div style={styles.container}>
      {!currentChannel ? (
        <p style={styles.noChannel}>Sélectionnez une conversation</p>
      ) : (
        <div style={styles.message}>
          <div style={styles.avatar} />
          <div style={styles.messageContent}>
            <span style={styles.username}>Loïs Clerc</span>
            <p style={styles.text}>Bonjour dans {currentChannel.name} !</p>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#36393f',
    padding: '16px',
    overflowY: 'auto',
  },
  noChannel: {
    color: '#72767d',
    textAlign: 'center',
  },
  message: {
    display: 'flex',
    marginBottom: '16px',
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#36393f',
    marginRight: '12px',
  },
  messageContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  username: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '14px',
  },
  text: {
    color: '#dcddde',
    margin: '4px 0 0 0',
    fontSize: '14px',
  },
};
