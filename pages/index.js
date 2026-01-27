import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import UserStatus from '../components/UserStatus';

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MainContent />
      </div>
      <UserStatus />
    </div>
  );
}
