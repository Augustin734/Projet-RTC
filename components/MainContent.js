export default function MainContent() {
  return (
    <div className="flex-1 bg-gray-700 flex flex-col">
      {/* En-tête */}
      <div className="p-4 border-b border-gray-600">
        <h1 className="text-white font-bold">Amis</h1>
      </div>

      {/* Contenu principal */}
      <div className="flex-1 p-4 flex items-center justify-center">
        <p className="text-gray-400">
          Il n'y a aucun ami en ligne pour le moment. Reviens plus tard !
        </p>
      </div>
    </div>
  );
}