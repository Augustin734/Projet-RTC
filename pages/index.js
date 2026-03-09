import { useState } from 'react';
import ServerList from '../components/ServerList';
import ChannelList from '../components/ChannelList';
import MainContent from '../components/MainContent';

export default function Home() {
  const [currentChannel, setCurrentChannel] = useState(null);

  const handleServerSelect = (server) => {
    console.log("Server sélectionné:", server.name);
  };

  const handleChannelSelect = (channel) => {
    setCurrentChannel(channel);
  };

  return (
    <div className="container">
      <ServerList onServerSelect={handleServerSelect} />
      <div style={styles.rightSide}>
        <ChannelList onChannelSelect={handleChannelSelect} />
        <MainContent currentChannel={currentChannel} />
      </div>
      <style jsx>{`
        .container {
          display: flex;
          height: 100vh;
        }
      `}</style>
      <style jsx>{`
        div[style-name="rightSide"] {
          display: flex;
          flex: 1;
          flex-direction: row;
        }
      `}</style>
    </div>
  );
}

const styles = {
  rightSide: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
  },
};
