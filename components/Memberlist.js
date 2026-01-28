import TopBar from './TopBar';
import ChatArea from './ChatArea';
import MessageInput from './MessageInput';

export default function MainContent({ activeChannel }) {
  return (
    <div style={styles.container}>
      <TopBar channelName={activeChannel?.name} />
      <ChatArea activeChannel={activeChannel} />
      <MessageInput />
    </div>
  );
}

const styles = {
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#36393f',
  },
};
