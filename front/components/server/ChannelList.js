'use client';

import { useEffect, useState } from "react";
import CreateChannelModal from "../modal/CreateChannelModal";

export default function ChannelList({ serverId, serverName, onChannelSelect }) {
  const [channels, setChannels] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!serverId) return;

    const fetchChannels = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Vous devez être connecté !");
        return;
      }

      try {
        const res = await fetch(`http://localhost:3001/servers/${serverId}/channels`, {
          headers: { Authorization: "Bearer " + token }
        });

        if (!res.ok) throw new Error("Erreur lors de la récupération des channels");

        const data = await res.json();
        setChannels(data.data || []);
      } catch (err) {
        console.error(err);
        alert("Impossible de récupérer les channels !");
      }
    };

    fetchChannels();
  }, [serverId]);

  if (!serverId) {
    return (
      <div className="channel-container">
        Sélectionnez un serveur pour voir les channels
      </div>
    );
  }

  return (
    <div className="channel-container">
      <div className="channel-header">
        {serverName || "Channels"}
      </div>

      <div className="create-channel" onClick={() => setIsModalOpen(true)}>
        + Créer un channel
      </div>

      {channels.map(channel => (
        <div key={channel.id} className="channel-item" onClick={() => onChannelSelect(channel)}>
          <div className="channel-avatar" />
          <span>{channel.name}</span>
        </div>
      ))}

      <CreateChannelModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serverId={serverId}
        onChannelCreated={newChannel => setChannels(prev => [...prev, newChannel])}
      />
    </div>
  );
}