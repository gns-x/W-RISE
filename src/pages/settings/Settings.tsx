import React, { useState } from 'react';
import { 
  User, 
  Lock, 
  CreditCard, 
  Bell,
  Instagram,
  Youtube,
  Plus,
  Trash,
  Save,
  LogOut,
  AlertCircle
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { useAuth } from '../../hooks/useAuth';
import { toast } from 'sonner';

const Settings: React.FC = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const [saving, setSaving] = useState(false);
  
  const handleSaveChanges = () => {
    setSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      setSaving(false);
      toast.success('Settings updated successfully!');
    }, 1000);
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-500">Manage your account settings and preferences</p>
        </div>
        <div>
          <Button 
            variant="outline" 
            leftIcon={<LogOut size={16} />}
            className="text-red-600 hover:bg-red-50 hover:border-red-200"
            onClick={() => {
              logout();
              toast.success('Logged out successfully');
            }}
          >
            Sign Out
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <Card className="lg:col-span-1 h-fit">
          <CardContent className="p-0">
            <nav>
              <ul className="divide-y divide-gray-200">
                <li>
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`flex items-center w-full px-4 py-3 text-sm ${
                      activeTab === 'profile' 
                        ? 'bg-indigo-50 text-indigo-700 font-medium' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <User size={18} className="mr-3" />
                    Profile
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('password')}
                    className={`flex items-center w-full px-4 py-3 text-sm ${
                      activeTab === 'password' 
                        ? 'bg-indigo-50 text-indigo-700 font-medium' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Lock size={18} className="mr-3" />
                    Password
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('billing')}
                    className={`flex items-center w-full px-4 py-3 text-sm ${
                      activeTab === 'billing' 
                        ? 'bg-indigo-50 text-indigo-700 font-medium' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <CreditCard size={18} className="mr-3" />
                    Billing
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('notifications')}
                    className={`flex items-center w-full px-4 py-3 text-sm ${
                      activeTab === 'notifications' 
                        ? 'bg-indigo-50 text-indigo-700 font-medium' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Bell size={18} className="mr-3" />
                    Notifications
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('connections')}
                    className={`flex items-center w-full px-4 py-3 text-sm ${
                      activeTab === 'connections' 
                        ? 'bg-indigo-50 text-indigo-700 font-medium' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Instagram size={18} className="mr-3" />
                    Connected Accounts
                  </button>
                </li>
              </ul>
            </nav>
          </CardContent>
        </Card>
        
        {/* Main content */}
        <div className="lg:col-span-3">
          {/* Profile Settings */}
          {activeTab === 'profile' && (
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-6">
                  {user?.avatar ? (
                    <img 
                      src={user.avatar} 
                      alt={user.name} 
                      className="w-20 h-20 rounded-full mr-4"
                    />
                  ) : (
                    <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-semibold text-xl mr-4">
                      {user?.name?.charAt(0) || 'U'}
                    </div>
                  )}
                  <div>
                    <Button variant="outline" size="sm">
                      Change Photo
                    </Button>
                    <p className="text-xs text-gray-500 mt-1">JPG, GIF or PNG. 1MB max.</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      defaultValue={user?.name}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      defaultValue={user?.email}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                      Username
                    </label>
                    <input
                      id="username"
                      type="text"
                      className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      defaultValue="creator123"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 mb-1">
                      Timezone
                    </label>
                    <select
                      id="timezone"
                      className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      defaultValue="America/New_York"
                    >
                      <option value="America/New_York">Eastern Time (US & Canada)</option>
                      <option value="America/Chicago">Central Time (US & Canada)</option>
                      <option value="America/Denver">Mountain Time (US & Canada)</option>
                      <option value="America/Los_Angeles">Pacific Time (US & Canada)</option>
                      <option value="Europe/London">London</option>
                      <option value="Europe/Paris">Paris</option>
                      <option value="Asia/Tokyo">Tokyo</option>
                    </select>
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                      Bio
                    </label>
                    <textarea
                      id="bio"
                      rows={4}
                      className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      defaultValue="Content creator passionate about fashion, beauty, and lifestyle."
                    />
                    <p className="text-xs text-gray-500 mt-1">Brief description for your profile. Maximum 160 characters.</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t border-gray-200 pt-4 flex justify-end">
                <Button 
                  leftIcon={<Save size={16} />} 
                  isLoading={saving}
                  onClick={handleSaveChanges}
                >
                  Save Changes
                </Button>
              </CardFooter>
            </Card>
          )}
          
          {/* Password Settings */}
          {activeTab === 'password' && (
            <Card>
              <CardHeader>
                <CardTitle>Password & Security</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                      Current Password
                    </label>
                    <input
                      id="currentPassword"
                      type="password"
                      className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                      New Password
                    </label>
                    <input
                      id="newPassword"
                      type="password"
                      className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm New Password
                    </label>
                    <input
                      id="confirmPassword"
                      type="password"
                      className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
                    <div className="flex">
                      <AlertCircle size={20} className="text-yellow-600 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="text-sm font-medium text-yellow-800">Password Security Tips</h3>
                        <p className="text-sm text-yellow-700 mt-1">
                          For a strong password, include at least 8 characters with a mix of uppercase, lowercase, numbers, and special characters.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <h3 className="text-sm font-medium text-gray-700 mb-3">Two-Factor Authentication</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                        <p className="text-xs text-gray-500 mt-1">Currently disabled</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Enable 2FA
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t border-gray-200 pt-4 flex justify-end">
                <Button 
                  onClick={handleSaveChanges}
                  isLoading={saving}
                >
                  Update Password
                </Button>
              </CardFooter>
            </Card>
          )}
          
          {/* Billing Settings */}
          {activeTab === 'billing' && (
            <Card>
              <CardHeader>
                <CardTitle>Billing & Subscription</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-md mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">Current Plan: Free Trial</h3>
                      <p className="text-sm text-gray-600 mt-1">Your trial ends in 12 days</p>
                    </div>
                    <Button>
                      Upgrade Plan
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-3">Payment Method</h3>
                    <div className="border border-gray-200 rounded-md p-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="p-2 bg-gray-100 rounded mr-3">
                          <CreditCard size={20} className="text-gray-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-700">No payment method added</p>
                          <p className="text-xs text-gray-500">Add a payment method to subscribe to a paid plan</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Add Method
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-3">Billing History</h3>
                    <div className="bg-gray-50 rounded-md p-6 text-center">
                      <p className="text-gray-600 mb-2">No billing history yet</p>
                      <p className="text-sm text-gray-500">Your invoices will appear here once you subscribe to a paid plan</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          
          {/* Notifications Settings */}
          {activeTab === 'notifications' && (
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-3">Email Notifications</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-700">Weekly Analytics Report</p>
                          <p className="text-xs text-gray-500">Receive a summary of your content performance</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-700">New Monetization Opportunities</p>
                          <p className="text-xs text-gray-500">Be notified when new revenue options match your profile</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-700">Content Insights</p>
                          <p className="text-xs text-gray-500">Important insights about your content performance</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-700">Product Updates</p>
                          <p className="text-xs text-gray-500">News about feature releases and improvements</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" value="" className="sr-only peer" />
                          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <h3 className="text-sm font-medium text-gray-700 mb-3">Push Notifications</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-700">Browser Notifications</p>
                          <p className="text-xs text-gray-500">Receive notifications in your browser</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-700">Chatbot Alert</p>
                          <p className="text-xs text-gray-500">Get notified when your chatbot needs attention</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t border-gray-200 pt-4 flex justify-end">
                <Button 
                  onClick={handleSaveChanges}
                  isLoading={saving}
                >
                  Save Preferences
                </Button>
              </CardFooter>
            </Card>
          )}
          
          {/* Connected Accounts */}
          {activeTab === 'connections' && (
            <Card>
              <CardHeader>
                <CardTitle>Connected Accounts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-6">Connect your social media accounts to analyze your content and build chatbots.</p>
                
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-md p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="p-2 bg-pink-50 rounded-full mr-3">
                          <Instagram size={20} className="text-pink-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Instagram</p>
                          <p className="text-xs text-green-600">Connected as @creatorhandle</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="text-red-600 hover:bg-red-50">
                          Disconnect
                        </Button>
                        <Button variant="outline" size="sm">
                          Reconnect
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-md p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="p-2 bg-red-50 rounded-full mr-3">
                          <Youtube size={20} className="text-red-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">YouTube</p>
                          <p className="text-xs text-gray-500">Not connected</p>
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        leftIcon={<Plus size={16} />}
                      >
                        Connect
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <p className="text-sm text-gray-700 mb-4 font-medium">Data Access Permissions</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="bg-gray-100 text-gray-800 text-xs px-1.5 py-0.5 rounded mr-2 mt-0.5">Read</span>
                      <span>Access your public profile information and posts for analysis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-gray-100 text-gray-800 text-xs px-1.5 py-0.5 rounded mr-2 mt-0.5">Read</span>
                      <span>Get engagement metrics (likes, comments, views) for your content</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-gray-100 text-gray-800 text-xs px-1.5 py-0.5 rounded mr-2 mt-0.5">Read</span>
                      <span>Access account insights information including audience demographics</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="border-t border-gray-200 pt-4 text-center text-sm text-gray-600">
                <p>We value your privacy and never post on your behalf without explicit permission.</p>
              </CardFooter>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;