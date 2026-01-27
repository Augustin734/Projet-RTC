export function ChannelList() {
  return (
    <div className="w-60 bg-gray-800 text-gray-300 flex flex-col">
      {/* En-tête */}
      <div className="p-4 font-bold text-white border-b border-gray-700">
        Amis
      </div>

      {/* Liste des amis en ligne */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex items-center p-2 rounded hover:bg-gray-700">
          <div className="w-8 h-8 rounded-full bg-gray-600 mr-2"></div>
          <span>Nitro</span>
          <span className="ml-auto text-xs text-green-500">OFFRE</span>
        </div>
        {/* Ajoute d'autres amis ici */}
      </div>

      {/* Messages privés */}
      <div className="p-4 font-bold text-white border-t border-gray-700">
        Messages privés
      </div>
      {/* Ajoute des messages privés ici */}
    </div>
  );
}