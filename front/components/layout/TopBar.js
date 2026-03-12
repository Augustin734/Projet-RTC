export default function TopBar({ currentChannel }) {
  return (
    <div className="topbar">
      <h2>
        {currentChannel ? <><span>{currentChannel.name}</span></> : "Aucun channel sélectionné"}
      </h2>
    </div>
  );
}