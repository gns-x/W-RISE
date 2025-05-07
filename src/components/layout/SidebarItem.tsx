import React from 'react';
import { cn } from '../../utils/cn';
import { useLocation } from 'react-router-dom';

interface NavItem {
  path: string;
  label: string;
  icon: React.ReactNode;
}

interface SidebarItemProps {
  item: NavItem;
  collapsed: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ item, collapsed }) => {
  // Use the useLocation hook from react-router-dom
  const location = useLocation();
  const isActive = location.pathname === item.path;
  
  return (
    <li className="relative group">
      <a
        href={item.path}
        className={cn(
          "flex items-center px-4 py-2.5 rounded-lg transition-all duration-200",
          isActive 
            ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white" 
            : "text-gray-400 hover:text-white hover:bg-white/5",
          collapsed ? "justify-center" : "justify-start"
        )}
      >
        <div className={cn(
          "flex items-center justify-center min-w-8 transition-all duration-200",
          isActive ? "text-blue-400" : "group-hover:text-blue-400"
        )}>
          {item.icon}
        </div>
        {!collapsed && (
          <span className={cn(
            "ml-3 font-medium transition-all duration-200",
            isActive ? "text-white" : ""
          )}>
            {item.label}
          </span>
        )}
        
        {isActive && (
          <span className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-400 to-purple-500 rounded-r-md transform transition-transform duration-300 scale-y-100"></span>
        )}
      </a>
      
      {/* Tooltip for collapsed state */}
      {collapsed && (
        <div className="absolute left-14 top-0 z-50 w-auto opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none">
          <div className="bg-gray-800 rounded-md py-1.5 px-3 shadow-xl">
            <p className="text-sm font-medium text-white whitespace-nowrap">{item.label}</p>
          </div>
          <div className="absolute left-0 top-3 -ml-1 transform rotate-45 w-2 h-2 bg-gray-800"></div>
        </div>
      )}
    </li>
  );
};

export default SidebarItem;