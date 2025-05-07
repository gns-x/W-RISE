import React from 'react';
import { cn } from '../../utils/cn';

interface Platform {
  id: string;
  name: string;
  icon: React.ReactNode;
  connected: boolean;
  accentColor: string;
}

interface ConnectedPlatformProps {
  platform: Platform;
}

const ConnectedPlatform: React.FC<ConnectedPlatformProps> = ({ platform }) => {
  return (
    <div className="group relative flex items-center p-2 rounded-md hover:bg-white/5 transition-all duration-200">
      <div className={cn(
        "flex items-center justify-center h-8 w-8 rounded-md mr-3 transition-all duration-300",
        platform.accentColor,
        platform.connected ? "opacity-100" : "opacity-50",
        "shadow-md group-hover:shadow-lg group-hover:scale-105"
      )}>
        <div className="text-white">
          {platform.icon}
        </div>
      </div>
      
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-300 truncate">
          {platform.name}
        </p>
      </div>
      
      {platform.connected ? (
        <span className="ml-auto text-xs bg-green-500/10 text-green-400 px-2 py-0.5 rounded-full border border-green-500/20">
          Connected
        </span>
      ) : (
        <button className="ml-auto text-xs bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 px-2 py-0.5 rounded-full transition-all duration-200 border border-white/10 hover:border-white/20 transform hover:scale-105">
          Connect
        </button>
      )}
    </div>
  );
};

export default ConnectedPlatform;