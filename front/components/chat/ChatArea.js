'use client'

import { useEffect, useState } from "react";
import { io } from "socket.io-client";

let socket = null;
let typingTimeout = null;

export default function ChatArea({ currentChannel, setSendMessage, setTyping }) {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [typingText, setTypingText] = useState("");

  // --- Récupération de l'historique depuis MongoDB ---
  const fetchMessages = async (channelId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const res = await fetch(`http://localhost:3001/message/channel/${channelId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      const result = await res.json();
      const messagesFromServer = result.data || [];

      const history = messagesFromServer.map(m => ({
        type: "chat",
        sender: m.sender,       // nom réel de l'utilisateur
        text: m.content
      }));

      setMessages(history);

    } catch (err) {
      console.error("Erreur récupération messages:", err);
    }
  };

  // --- Connexion socket au chargement ---
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    socket = io("http://localhost:3001", { auth: { token } });

    socket.on("system", (msg) => {
      setMessages(prev => [...prev, { type: "system", text: msg }]);
    });

    socket.on("channel message", (data) => {
      setMessages(prev => [
        ...prev,
        { type: "chat", sender: data.sender, text: data.msg }
      ]);
    });

    socket.on("channel users", (data) => {
      if (String(data.channelId) === String(currentChannel?.id)) {
        setUsers(data.users);
      }
    });

    socket.on("typing", (data) => {
      setTypingText(data.isTyping ? `${data.user} écrit...` : "");
    });

    return () => socket.disconnect();
  }, []);

  // --- Join / Leave channel + récupérer historique ---
  useEffect(() => {
    if (!currentChannel) return;
    fetchMessages(currentChannel.id);

    if (!socket) return;

    setMessages([]); // reset local messages

    socket.emit("join channel", currentChannel.id);

    return () => {
      socket.emit("leave channel", currentChannel.id);
    };
  }, [currentChannel]);

  // --- Exposer fonctions pour MessageInput.js ---
  useEffect(() => {
    if (!socket) return;

    // Fonction d'envoi
    setSendMessage(() => (msg) => {
      if (!msg.trim() || !currentChannel) return;

      socket.emit("channel message", {
        channelId: currentChannel.id,
        msg
      });

      socket.emit("typing", {
        channelId: currentChannel.id,
        isTyping: false
      });
    });

    // Fonction typing
    setTyping((isTyping) => {
      if (!currentChannel) return;

      socket.emit("typing", {
        channelId: currentChannel.id,
        isTyping
      });
    });

  }, [currentChannel]);

  if (!currentChannel) {
    return (
      <div className="chat-area">
        <p className="no-channel">Sélectionnez un channel</p>
      </div>
    );
  }

  return (
    <div className="chat-area">

      {/* Utilisateurs en ligne */}
      <div className="users">
        Utilisateurs : {users.join(", ") || "..."}
      </div>

      {/* Indicateur de saisie */}
      {typingText && <div className="typing">{typingText}</div>}

      {/* Liste des messages */}
      <div className="messages">
        {messages.map((m, i) => (
          <div key={i} className="message">
            {m.type === "system" ? (
              <div className="system">{m.text}</div>
            ) : (
              <>
                <div className="message-avatar"></div>
                <div className="message-content">
                  <span className="message-username">{m.sender}</span>
                  <p className="message-text">{m.text}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}