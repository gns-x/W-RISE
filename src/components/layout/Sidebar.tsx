import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  BarChart, 
  MessageSquareText, 
  DollarSign, 
  Settings, 
  ChevronLeft,
  ChevronRight,
  Instagram,
  Youtube,
  Sparkles
} from 'lucide-react';
import SidebarItem from './SidebarItem';
import ConnectedPlatform from './ConnectedPlatform';
import { cn } from '../../utils/cn';

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

// Mock user data - replace with actual auth implementation
const mockUser = {
  name: 'Sarah Johnson',
  email: 'sarah@creator.io',
  avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800'
};

const Sidebar: React.FC<SidebarProps> = ({ collapsed, setCollapsed }) => {
  const navItems = [
    { path: '/app/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { path: '/app/content', label: 'Content Analysis', icon: <BarChart size={20} /> },
    { path: '/app/chatbot', label: 'Chatbot', icon: <MessageSquareText size={20} /> },
    { path: '/app/monetization', label: 'Monetization', icon: <DollarSign size={20} /> },
    { path: '/app/settings', label: 'Settings', icon: <Settings size={20} /> },
  ];
  
  const platforms = [
    { 
      id: 'instagram', 
      name: 'Instagram', 
      icon: <Instagram size={16} />, 
      connected: true, 
      accentColor: 'bg-gradient-to-r from-purple-500 to-pink-500'
    },
    { 
      id: 'youtube', 
      name: 'YouTube', 
      icon: <Youtube size={16} />, 
      connected: false, 
      accentColor: 'bg-gradient-to-r from-red-500 to-red-600'
    }
  ];

  return (
    <aside 
      className={cn(
        "bg-gradient-to-b from-gray-900 to-gray-950 text-white h-screen flex flex-col shadow-xl relative z-20",
        "transition-all duration-300 ease-in-out",
        collapsed ? "w-20" : "w-72"
      )}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/5 pointer-events-none"></div>
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl"></div>
      
      {/* Logo */}
      <div className="p-5 flex items-center justify-between border-b border-white/10 relative">
        <div className="flex items-center">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 shadow-md">
            <Sparkles size={16} className="text-white" />
          </div>
          {!collapsed && (
            <span className="ml-3 font-display text-xl font-bold tracking-wider bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              WRISE
            </span>
          )}
        </div>
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center justify-center h-7 w-7 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500/30"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>
      </div>
      
      {/* Profile */}
      <div className={cn(
        "relative group px-5 py-4 border-b border-white/10 transition-all duration-300",
        collapsed ? "justify-center" : "justify-start"
      )}>
        <div className="flex items-center">
          <div className="relative">
            <img 
              src={mockUser.avatar}
              alt={mockUser.name} 
              className="h-10 w-10 rounded-full object-cover border-2 border-purple-500/50 shadow-md transform transition-transform duration-300 hover:scale-105"
            />
            <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-gray-900"></span>
          </div>
          
          {!collapsed && (
            <div className="ml-3 overflow-hidden">
              <p className="text-sm font-medium text-white truncate">{mockUser.name}</p>
              <p className="text-xs text-gray-400 truncate">{mockUser.email}</p>
            </div>
          )}
        </div>
        
        {/* Hover tooltip for collapsed state */}
        {collapsed && (
          <div className="absolute left-16 top-4 w-48 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none z-50">
            <div className="bg-gray-800 rounded-md p-2 shadow-lg">
              <p className="text-sm font-medium text-white">{mockUser.name}</p>
              <p className="text-xs text-gray-400">{mockUser.email}</p>
            </div>
            <div className="absolute left-0 top-3 -ml-1 transform rotate-45 w-2 h-2 bg-gray-800"></div>
          </div>
        )}
      </div>
      
      {/* Navigation */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <nav className="flex-1 py-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
          <div className={cn(
            "px-4 mb-2",
            collapsed ? "sr-only" : ""
          )}>
            <p className="text-xs font-medium tracking-wider text-gray-500 uppercase">Main Menu</p>
          </div>
          <ul className="space-y-1 px-3">
            {navItems.map((item) => (
              <SidebarItem 
                key={item.path}
                item={item}
                collapsed={collapsed}
              />
            ))}
          </ul>
        </nav>
        
        {/* Connected platforms */}
        <div className={cn(
          "p-4 border-t border-white/10 transition-all duration-300",
          collapsed ? "hidden" : "block"
        )}>
          <div className="text-xs font-medium tracking-wider text-gray-500 uppercase mb-3">Connected Platforms</div>
          <div className="space-y-2">
            {platforms.map(platform => (
              <ConnectedPlatform 
                key={platform.id}
                platform={platform}
              />
            ))}
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="p-4 border-t border-white/10 flex items-center justify-center">
          <div className={cn(
            "text-xs text-gray-500",
            collapsed ? "sr-only" : ""
          )}>
            Version 0.1
          </div>
          {collapsed && (
            <div className="h-6 w-6 flex items-center justify-center rounded-full bg-white/5 text-gray-500">
              <Settings size={12} />
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;