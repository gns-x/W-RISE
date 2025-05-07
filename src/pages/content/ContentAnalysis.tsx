import React, { useState } from 'react';
import { 
  Calendar,
  BarChart3,
  Filter,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  ExternalLink,
  Instagram,
  ThumbsUp,
  MessageSquare,
  Eye
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Sample data for content performance
const contentData = [
  {
    id: 1,
    title: 'How I Gained 10K Followers in One Month',
    platform: 'instagram',
    type: 'post',
    date: '2023-04-18',
    thumbnail: 'https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    metrics: {
      impressions: 24500,
      engagement: 1250,
      engagementRate: 5.1,
      likes: 1050,
      comments: 200,
      shares: 75,
    },
    url: '#'
  },
  {
    id: 2,
    title: 'My Morning Routine as a Content Creator',
    platform: 'instagram',
    type: 'reel',
    date: '2023-04-10',
    thumbnail: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    metrics: {
      impressions: 85600,
      engagement: 12300,
      engagementRate: 14.4,
      likes: 10800,
      comments: 1200,
      shares: 300,
    },
    url: '#'
  },
  {
    id: 3,
    title: 'Behind the Scenes of My Latest Photoshoot',
    platform: 'instagram',
    type: 'post',
    date: '2023-04-02',
    thumbnail: 'https://images.pexels.com/photos/6953867/pexels-photo-6953867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    metrics: {
      impressions: 18900,
      engagement: 980,
      engagementRate: 5.2,
      likes: 870,
      comments: 95,
      shares: 15,
    },
    url: '#'
  },
  {
    id: 4,
    title: '5 Tips for Instagram Growth in 2023',
    platform: 'instagram',
    type: 'reel',
    date: '2023-03-28',
    thumbnail: 'https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    metrics: {
      impressions: 65400,
      engagement: 7600,
      engagementRate: 11.6,
      likes: 6800,
      comments: 680,
      shares: 120,
    },
    url: '#'
  },
];

// Sample data for chart
const weeklyPerformanceData = [
  { day: 'Mon', engagement: 4000, reach: 24000, impressions: 36000 },
  { day: 'Tue', engagement: 3000, reach: 18000, impressions: 30000 },
  { day: 'Wed', engagement: 5000, reach: 22000, impressions: 38000 },
  { day: 'Thu', engagement: 2780, reach: 19000, impressions: 29000 },
  { day: 'Fri', engagement: 1890, reach: 14000, impressions: 22000 },
  { day: 'Sat', engagement: 2390, reach: 20000, impressions: 31000 },
  { day: 'Sun', engagement: 3490, reach: 25000, impressions: 42000 },
];

// Content insights
const contentInsights = [
  {
    id: 1,
    type: 'positive',
    metric: 'Engagement Rate',
    value: '+24%',
    text: 'Your reels are getting higher engagement than your regular posts',
    icon: <TrendingUp size={16} className="text-green-500" />
  },
  {
    id: 2,
    type: 'negative',
    metric: 'Post Frequency',
    value: '-15%',
    text: 'Your posting frequency has decreased compared to last month',
    icon: <TrendingDown size={16} className="text-red-500" />
  },
  {
    id: 3,
    type: 'positive',
    metric: 'Comments',
    value: '+37%',
    text: 'Content with personal stories receives more comments',
    icon: <TrendingUp size={16} className="text-green-500" />
  },
];

const ContentAnalysis: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Content Analysis</h1>
          <p className="text-gray-500">Analyze and optimize your content strategy</p>
        </div>
        <div className="flex gap-3">
          <div className="flex border border-gray-300 rounded-md overflow-hidden">
            <button 
              className={`px-3 py-1.5 text-sm ${selectedPeriod === 'week' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700'}`}
              onClick={() => setSelectedPeriod('week')}
            >
              Week
            </button>
            <button 
              className={`px-3 py-1.5 text-sm ${selectedPeriod === 'month' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700'}`}
              onClick={() => setSelectedPeriod('month')}
            >
              Month
            </button>
            <button 
              className={`px-3 py-1.5 text-sm ${selectedPeriod === 'year' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700'}`}
              onClick={() => setSelectedPeriod('year')}
            >
              Year
            </button>
          </div>
          <Button variant="outline" leftIcon={<Calendar size={16} />}>
            Apr 10 - Apr 17
          </Button>
          <Button variant="outline" leftIcon={<Filter size={16} />}>
            Filters
          </Button>
        </div>
      </div>
      
      {/* Stats overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-5">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Impressions</p>
                <p className="text-2xl font-bold mt-1">194.5K</p>
              </div>
              <div className="p-2 bg-indigo-50 rounded-lg">
                <Eye size={20} className="text-indigo-600" />
              </div>
            </div>
            <div className="flex items-center mt-2">
              <ArrowUpRight size={16} className="text-green-500 mr-1" />
              <span className="text-green-500 text-sm font-medium">12.5%</span>
              <span className="text-gray-500 text-xs ml-1">from last week</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-5">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Engagement Rate</p>
                <p className="text-2xl font-bold mt-1">5.8%</p>
              </div>
              <div className="p-2 bg-purple-50 rounded-lg">
                <ThumbsUp size={20} className="text-purple-600" />
              </div>
            </div>
            <div className="flex items-center mt-2">
              <ArrowUpRight size={16} className="text-green-500 mr-1" />
              <span className="text-green-500 text-sm font-medium">2.3%</span>
              <span className="text-gray-500 text-xs ml-1">from last week</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-5">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Comments</p>
                <p className="text-2xl font-bold mt-1">2,175</p>
              </div>
              <div className="p-2 bg-green-50 rounded-lg">
                <MessageSquare size={20} className="text-green-600" />
              </div>
            </div>
            <div className="flex items-center mt-2">
              <ArrowDownRight size={16} className="text-red-500 mr-1" />
              <span className="text-red-500 text-sm font-medium">4.8%</span>
              <span className="text-gray-500 text-xs ml-1">from last week</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-5">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">New Followers</p>
                <p className="text-2xl font-bold mt-1">+378</p>
              </div>
              <div className="p-2 bg-pink-50 rounded-lg">
                <Instagram size={20} className="text-pink-600" />
              </div>
            </div>
            <div className="flex items-center mt-2">
              <ArrowUpRight size={16} className="text-green-500 mr-1" />
              <span className="text-green-500 text-sm font-medium">16.2%</span>
              <span className="text-gray-500 text-xs ml-1">from last week</span>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Charts */}
      <Card>
        <CardHeader>
          <CardTitle>Weekly Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyPerformanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="engagement" fill="#8884d8" name="Engagement" />
                <Bar dataKey="reach" fill="#82ca9d" name="Reach" />
                <Bar dataKey="impressions" fill="#ffc658" name="Impressions" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      {/* Content performance and insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Top performing content */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Top Performing Content</CardTitle>
              <Button variant="outline" size="sm">View All</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-5">
                {contentData.map(content => (
                  <div key={content.id} className="flex gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden">
                      <img 
                        src={content.thumbnail} 
                        alt={content.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col flex-grow min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="bg-pink-100 text-pink-800 text-xs px-1.5 py-0.5 rounded">
                          {content.platform}
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs px-1.5 py-0.5 rounded">
                          {content.type}
                        </span>
                      </div>
                      <h3 className="font-medium text-gray-900 mb-1 truncate">{content.title}</h3>
                      <div className="flex gap-4 text-xs text-gray-500">
                        <span>{new Date(content.date).toLocaleDateString()}</span>
                        <span className="flex items-center">
                          <ThumbsUp size={12} className="mr-1" /> {content.metrics.likes.toLocaleString()}
                        </span>
                        <span className="flex items-center">
                          <MessageSquare size={12} className="mr-1" /> {content.metrics.comments.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex flex-col items-end mr-4">
                        <span className="text-sm font-medium text-gray-700">{content.metrics.engagementRate}%</span>
                        <span className="text-xs text-gray-500">Engagement</span>
                      </div>
                      <a href={content.url} className="text-gray-400 hover:text-gray-600">
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Content insights */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Content Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contentInsights.map(insight => (
                  <div key={insight.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">{insight.metric}</span>
                      <span className={`text-sm font-medium ${
                        insight.type === 'positive' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {insight.icon} {insight.value}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{insight.text}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Recommended Actions</h3>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-sm text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-indigo-100 flex-shrink-0 flex items-center justify-center text-indigo-700 font-medium">1</div>
                    <span>Increase your posting frequency to at least 4 posts per week</span>
                  </li>
                  <li className="flex gap-2 text-sm text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-indigo-100 flex-shrink-0 flex items-center justify-center text-indigo-700 font-medium">2</div>
                    <span>Create more reel content, they're outperforming your static posts</span>
                  </li>
                  <li className="flex gap-2 text-sm text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-indigo-100 flex-shrink-0 flex items-center justify-center text-indigo-700 font-medium">3</div>
                    <span>Add more personal stories to increase comment engagement</span>
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="border-t border-gray-200 pt-4">
              <Button variant="outline" fullWidth>Generate Detailed Report</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContentAnalysis;