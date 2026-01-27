export function ServerList() {
  const servers = [
    { id: 1, name: "Discord", icon: "🏠", isHome: true },
    { id: 2, name: "Gaming", icon: "🎮" },
    { id: 3, name: "Coding", icon: "💻" },
    { id: 4, name: "Music", icon: "🎵" },
  ];

  return (
    <div className="w-18 bg-gray-900 flex flex-col items-center py-3 gap-2">
      {/* Home button */}
      <div className="relative group">
        <div className="w-12 h-12 rounded-full bg-indigo-600 hover:bg-indigo-500 hover:rounded-2xl transition-all duration-200 flex items-center justify-center cursor-pointer text-2xl">
          {servers[0].icon}
        </div>
        <div className="absolute left-full ml-2 px-3 py-2 bg-black text-white text-sm rounded hidden group-hover:block whitespace-nowrap z-50">
          {servers[0].name}
        </div>
      </div>

      {/* Separator */}
      <div className="w-8 h-0.5 bg-gray-700 rounded"></div>

      {/* Server list */}
      {servers.slice(1).map((server) => (
        <div key={server.id} className="relative group">
          <div className="w-12 h-12 rounded-full bg-gray-700 hover:bg-indigo-600 hover:rounded-2xl transition-all duration-200 flex items-center justify-center cursor-pointer text-2xl">
            {server.icon}
          </div>
          <div className="absolute left-full ml-2 px-3 py-2 bg-black text-white text-sm rounded hidden group-hover:block whitespace-nowrap z-50">
            {server.name}
          </div>
        </div>
      ))}

      {/* Add server button */}
      <div className="relative group">
        <div className="w-12 h-12 rounded-full bg-gray-700 hover:bg-green-600 hover:rounded-2xl transition-all duration-200 flex items-center justify-center cursor-pointer text-2xl text-green-500 hover:text-white">
          +
        </div>
        <div className="absolute left-full ml-2 px-3 py-2 bg-black text-white text-sm rounded hidden group-hover:block whitespace-nowrap z-50">
          Ajouter un serveur
        </div>
      </div>
    </div>
  );
}