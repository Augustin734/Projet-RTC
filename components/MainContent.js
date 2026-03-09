import TopBar from './TopBar';
import ChatArea from './ChatArea';
import MessageInput from './MessageInput';

export default function MainContent({ currentChannel }) {
  return (
    <div style={styles.container}>
      <TopBar currentChannel={currentChannel} />
      <ChatArea currentChannel={currentChannel} />
      <MessageInput currentChannel={currentChannel} />
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
