'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CreateServerModal from "../modal/CreateServerModal";

export default function ServerList({ onServerSelect }) {

  const [servers, setServers] = useState([]);
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchServers = async () => {

      const token = localStorage.getItem("token");

      if (!token) {
        alert("Vous devez être connecté !");
        router.push("/login");
        return;
      }

      try {
        const res = await fetch("http://localhost:3001/servers/members", {
          headers: {
            Authorization: "Bearer " + token
          }
        });

        if (!res.ok) {
          throw new Error("Erreur lors de la récupération des serveurs");
        }

        const data = await res.json();

        setServers(data.data || []);

      } catch (err) {
        console.error(err);
        alert("Impossible de récupérer vos serveurs !");
      }
    };

    fetchServers();

  }, [router]);

  return (
    <div className="server-list">

      {servers.map((server) => (
        <div
          key={server.id}
          className="server-icon"
          onClick={() => onServerSelect(server)}
          title={server.name}
        >
          {server.name?.[0]}
        </div>
      ))}

      <div
        className="add-server"
        onClick={() => setIsModalOpen(true)}
      >
        +
      </div>

      <CreateServerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onServerCreated={(server) => setServers(prev => [...prev, server])}
      />

    </div>
  );
}