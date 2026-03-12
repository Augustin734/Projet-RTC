import { useState } from "react";
import TopBar from './TopBar';
import ChatArea from '../chat/ChatArea';
import MessageInput from '../chat/MessageInput';

export default function MainContent({ currentChannel }) {

  const [sendMessage, setSendMessage] = useState(() => () => {});
  const [setTyping, setTypingFunction] = useState(() => () => {});

  return (
    <div className="chat-container">

      <TopBar currentChannel={currentChannel} />

      <ChatArea
        currentChannel={currentChannel}
        setSendMessage={setSendMessage}
        setTyping={setTypingFunction}
      />

      <MessageInput
        currentChannel={currentChannel}
        sendMessage={sendMessage}
        setTyping={setTypingFunction}
      />

    </div>
  );
}