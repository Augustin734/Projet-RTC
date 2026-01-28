export default function ChannelList({ onChannelSelect }) {
  const channels = [
    { id: 1, name: "Général" },
    { id: 2, name: "Amis" },
    { id: 3, name: "Messages privés" },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>Amis</div>
      {channels.map((channel) => (
        <div
          key={channel.id}
          style={styles.channelItem}
          onClick={() => onChannelSelect(channel)}
        >
          <div style={styles.avatar} />
          <span>{channel.name}</span>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    width: '240px',
    backgroundColor: '#2f3136',
    color: '#dcddde',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    padding: '12px',
    fontWeight: 'bold',
    borderBottom: '1px solid #202225',
  },
  channelItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 12px',
    cursor: 'pointer',
  },
  avatar: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: '#36393f',
    marginRight: '8px',
  },
};
