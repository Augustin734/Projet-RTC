export function MemberList() {
  const members = [
    { id: 1, name: "Alice", avatar: "A", color: "bg-red-500", status: "online", activity: "Joue à Valorant" },
    { id: 2, name: "Bob", avatar: "B", color: "bg-blue-500", status: "online", activity: null },
    { id: 3, name: "Charlie", avatar: "C", color: "bg-green-500", status: "idle", activity: "Absent" },
    { id: 4, name: "David", avatar: "D", color: "bg-yellow-500", status: "dnd", activity: "Ne pas déranger" },
    { id: 5, name: "Emma", avatar: "E", color: "bg-purple-500", status: "offline", activity: null },
  ];

  const onlineMembers = members.filter(m => m.status !== 'offline');
  const offlineMembers = members.filter(m => m.status === 'offline');

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'idle': return 'bg-yellow-500';
      case 'dnd': return 'bg-red-500';
      case 'offline': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const MemberItem = ({ member }) => (
    <div className="flex items-center gap-3 px-2 py-1.5 mx-2 rounded hover:bg-gray-700 cursor-pointer group">
      <div className="relative">
        <div className={`w-8 h-8 rounded-full ${member.color} flex items-center justify-center text-white font-bold text-sm`}>
          {member.avatar}
        </div>
        <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-gray-800 ${getStatusColor(member.status)}`}></div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-gray-300 truncate">{member.name}</div>
        {member.activity && (
          <div className="text-xs text-gray-400 truncate">{member.activity}</div>
        )}
      </div>
    </div>
  );

  return (
    <div className="w-60 bg-gray-800 flex flex-col">
      {/* Members count */}
      <div className="px-4 pt-4 pb-2">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
          Membres — {members.length}
        </h3>
      </div>

      {/* Members list */}
      <div className="flex-1 overflow-y-auto">
        {/* Online members */}
        {onlineMembers.length > 0 && (
          <div className="mb-4">
            <div className="px-4 py-2">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                En ligne — {onlineMembers.length}
              </span>
            </div>
            {onlineMembers.map(member => (
              <MemberItem key={member.id} member={member} />
            ))}
          </div>
        )}

        {/* Offline members */}
        {offlineMembers.length > 0 && (
          <div>
            <div className="px-4 py-2">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                Hors ligne — {offlineMembers.length}
              </span>
            </div>
            {offlineMembers.map(member => (
              <MemberItem key={member.id} member={member} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}