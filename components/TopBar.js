export default function TopBar({ currentChannel }) {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{currentChannel?.name || "Amis"}</h2>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#2f3136',
    padding: '12px 16px',
    borderBottom: '1px solid #202225',
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    margin: 0,
    fontSize: '16px',
  },
};
