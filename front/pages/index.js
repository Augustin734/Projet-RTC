import { useState } from 'react';
import ServerList from '../components/server/ServerList';
import ChannelList from '../components/server/ChannelList';
import MainContent from '../components/layout/MainContent';

export default function Home() {
  const [currentChannel, setCurrentChannel] = useState(null);
  const [selectedServer, setSelectedServer] = useState(null);
  const [currentServer, setCurrentServer] = useState(null);

  const handleServerSelect = (server) => {
    setCurrentServer(server);
    setSelectedServer(server);
    setCurrentChannel(null); 
    console.log("Server sélectionné:", server.name);
  };

  const handleChannelSelect = (channel) => {
    setCurrentChannel(channel);
  };

  return (
    <div className="container">
      <ServerList onServerSelect={handleServerSelect} />
      <div style={styles.rightSide}>
        <ChannelList serverId={selectedServer?.id} serverName={currentServer?.name} onChannelSelect={handleChannelSelect} />
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
