import { useState } from 'react';

export function ChatArea() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      author: "Alice",
      avatar: "A",
      color: "bg-red-500",
      timestamp: "10:30",
      content: "Salut tout le monde ! 👋"
    },
    {
      id: 2,
      author: "Bob",
      avatar: "B",
      color: "bg-blue-500",
      timestamp: "10:32",
      content: "Hey ! Comment ça va ?"
    },
    {
      id: 3,
      author: "Charlie",
      avatar: "C",
      color: "bg-green-500",
      timestamp: "10:35",
      content: "Super ! Quelqu'un veut jouer ?"
    },
  ]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        author: "Username",
        avatar: "U",
        color: "bg-indigo-500",
        timestamp: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
        content: message
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-gray-700">
      {/* Channel header */}
      <div className="h-12 px-4 flex items-center shadow-md border-b border-gray-900">
        <span className="text-gray-400 text-xl mr-2">#</span>
        <h2 className="font-bold text-white">général</h2>
        <div className="ml-auto flex items-center gap-4 text-gray-400">
          <button className="hover:text-white">🔔</button>
          <button className="hover:text-white">📌</button>
          <button className="hover:text-white">👥</button>
          <button className="hover:text-white">🔍</button>
        </div>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className="flex gap-3 hover:bg-gray-750 px-2 py-1 rounded group">
            <div className={`w-10 h-10 rounded-full ${msg.color} flex items-center justify-center text-white font-bold flex-shrink-0`}>
              {msg.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2">
                <span className="font-semibold text-white">{msg.author}</span>
                <span className="text-xs text-gray-400">{msg.timestamp}</span>
              </div>
              <div className="text-gray-300 break-words">{msg.content}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Message input */}
      <div className="px-4 pb-6">
        <form onSubmit={handleSendMessage} className="relative">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Envoyer un message dans #général"
            className="w-full bg-gray-600 text-gray-200 rounded-lg px-4 py-3 focus:outline-none placeholder-gray-400"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-2">
            <button type="button" className="text-gray-400 hover:text-white text-xl">
              🎁
            </button>
            <button type="button" className="text-gray-400 hover:text-white text-xl">
              😊
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}