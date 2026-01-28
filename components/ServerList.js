export default function ServerList({ onServerSelect }) {
  const servers = [
    { id: 1, name: "Server 1" },
    { id: 2, name: "Server 2" },
    { id: 3, name: "Server 3" },
  ];

  return (
    <div style={styles.container}>
      {servers.map((server) => (
        <div
          key={server.id}
          style={styles.serverIcon}
          onClick={() => onServerSelect(server)}
        />
      ))}
    </div>
  );
}

const styles = {
  container: {
    width: '72px',
    backgroundColor: '#202225',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '12px 0',
    gap: '12px',
  },
  serverIcon: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    backgroundColor: '#36393f',
    cursor: 'pointer',
  },
};
