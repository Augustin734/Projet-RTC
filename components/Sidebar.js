import { ServerList } from './ServerList';
import { ChannelList } from './ChannelList';

export default function Sidebar() {
  return (
    <div className="flex h-screen">
      <ServerList />
      <ChannelList />
    </div>
  );
}