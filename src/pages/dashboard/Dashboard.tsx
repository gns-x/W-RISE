import React from 'react';
import { Link } from 'react-router-dom';
import { 
  AlertCircle, 
  BarChart3, 
  MessageSquareText, 
  TrendingUp, 
  Users, 
  PlusCircle, 
  ChevronRight,
  Instagram,
  Youtube,
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { useAuth } from '../../hooks/useAuth';

// Sample data for charts
const engagementData = [
  { name: 'Mon', instagram: 4000, youtube: 2400 },
  { name: 'Tue', instagram: 3000, youtube: 1398 },
  { name: 'Wed', instagram: 2000, youtube: 9800 },
  { name: 'Thu', instagram: 2780, youtube: 3908 },
  { name: 'Fri', instagram: 1890, youtube: 4800 },
  { name: 'Sat', instagram: 2390, youtube: 3800 },
  { name: 'Sun', instagram: 3490, youtube: 4300 },
];

// Sample alerts data
const alerts = [
  { 
    id: 1, 
    type: 'insight', 
    message: 'Your video engagement has increased by 43% this week', 
    date: '2h ago',
    icon: <TrendingUp size={16} className="text-green-500" />
  },
  { 
    id: 2, 
    type: 'warning', 
    message: 'Your Instagram follower growth has slowed down', 
    date: '1d ago',
    icon: <AlertCircle size={16} className="text-amber-500" />
  },
  { 
    id: 3, 
    type: 'chatbot', 
    message: 'Your chatbot handled 124 conversations yesterday', 
    date: '1d ago',
    icon: <MessageSquareText size={16} className="text-blue-500" />
  },
];

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500">Welcome back, {user?.name || 'Creator'}!</p>
        </div>
        <div className="flex gap-3">
          <Link to="/app/content">
            <Button variant="outline" leftIcon={<BarChart3 size={16} />}>
              View Analytics
            </Button>
          </Link>
          <Link to="/app/chatbot">
            <Button leftIcon={<PlusCircle size={16} />}>
              New Chatbot
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Stats overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-5">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Followers</p>
                <p className="text-2xl font-bold mt-1">24.8K</p>
              </div>
              <div className="p-2 bg-indigo-50 rounded-lg">
                <Users size={20} className="text-indigo-600" />
              </div>
            </div>
            <div className="flex items-center mt-2">
              <ArrowUp size={16} className="text-green-500 mr-1" />
              <span className="text-green-500 text-sm font-medium">8.2%</span>
              <span className="text-gray-500 text-xs ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-5">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Engagement Rate</p>
                <p className="text-2xl font-bold mt-1">4.3%</p>
              </div>
              <div className="p-2 bg-purple-50 rounded-lg">
                <BarChart3 size={20} className="text-purple-600" />
              </div>
            </div>
            <div className="flex items-center mt-2">
              <ArrowUp size={16} className="text-green-500 mr-1" />
              <span className="text-green-500 text-sm font-medium">1.2%</span>
              <span className="text-gray-500 text-xs ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-5">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Chatbot Responses</p>
                <p className="text-2xl font-bold mt-1">1,243</p>
              </div>
              <div className="p-2 bg-green-50 rounded-lg">
                <MessageSquareText size={20} className="text-green-600" />
              </div>
            </div>
            <div className="flex items-center mt-2">
              <ArrowUp size={16} className="text-green-500 mr-1" />
              <span className="text-green-500 text-sm font-medium">24.5%</span>
              <span className="text-gray-500 text-xs ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-5">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Revenue Potential</p>
                <p className="text-2xl font-bold mt-1">$5.2K</p>
              </div>
              <div className="p-2 bg-amber-50 rounded-lg">
                <TrendingUp size={20} className="text-amber-600" />
              </div>
            </div>
            <div className="flex items-center mt-2">
              <ArrowDown size={16} className="text-red-500 mr-1" />
              <span className="text-red-500 text-sm font-medium">3.1%</span>
              <span className="text-gray-500 text-xs ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Engagement chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Engagement Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={engagementData}>
                  <defs>
                    <linearGradient id="instagram" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#C13584" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#C13584" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="youtube" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FF0000" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#FF0000" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Area type="monotone" dataKey="instagram" stroke="#C13584" fillOpacity={1} fill="url(#instagram)" />
                  <Area type="monotone" dataKey="youtube" stroke="#FF0000" fillOpacity={1} fill="url(#youtube)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center mt-4 space-x-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-pink-500 rounded-full mr-2"></div>
                <span className="text-xs text-gray-600">Instagram</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <span className="text-xs text-gray-600">YouTube</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t border-gray-200 pt-4 flex justify-end">
            <Link to="/app/content" className="text-sm text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
              View detailed analytics
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </CardFooter>
        </Card>
        
        {/* Alerts and Insights */}
        <Card>
          <CardHeader>
            <CardTitle>Alerts & Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alerts.map(alert => (
                <div key={alert.id} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex">
                    <div className="flex-shrink-0 mr-3">
                      {alert.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-700">{alert.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{alert.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t border-gray-200 pt-4 flex justify-center">
            <Button variant="outline" size="sm">
              View All Insights
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      {/* Connected platforms */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Instagram</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                <Instagram size={20} className="text-white" />
              </div>
              <div>
                <div className="flex items-center">
                  <h3 className="font-medium">@creatorhandle</h3>
                  <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full">Connected</span>
                </div>
                <p className="text-sm text-gray-500">12.4K followers • 3.2% eng. rate</p>
              </div>
            </div>
            
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div className="bg-gray-50 p-2 rounded">
                <p className="text-xs text-gray-500">Posts</p>
                <p className="font-medium">124</p>
              </div>
              <div className="bg-gray-50 p-2 rounded">
                <p className="text-xs text-gray-500">Avg. Likes</p>
                <p className="font-medium">462</p>
              </div>
              <div className="bg-gray-50 p-2 rounded">
                <p className="text-xs text-gray-500">Avg. Comments</p>
                <p className="font-medium">28</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t border-gray-200 pt-4 flex justify-end">
            <Link to="/app/content" className="text-sm text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
              View details
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>YouTube</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center h-[158px]">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-3">
              <Youtube size={24} className="text-red-600" />
            </div>
            <p className="text-gray-700 mb-4">Connect your YouTube channel to analyze your content</p>
            <Button variant="outline" size="sm" leftIcon={<PlusCircle size={16} />}>
              Connect YouTube
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;