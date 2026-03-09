export default function UserStatus() {
  return (
    <div className="bg-gray-800 p-4 flex items-center">
      <div className="w-8 h-8 rounded-full bg-gray-600 mr-2"></div>
      <span className="text-gray-300">Loïs Clerc</span>
      <div className="ml-auto flex items-center">
        <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
        <span className="text-gray-300 text-sm">En ligne</span>
      </div>
    </div>
  );
}
