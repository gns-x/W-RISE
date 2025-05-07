import React, { useState } from 'react';
import { 
  Sparkles, 
  Plus, 
  MessageSquareText, 
  Settings, 
  ChevronRight,
  ChevronDown,
  User,
  Bot,
  Edit,
  Trash,
  Power,
  Loader2
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';

// Sample chatbot data
const chatbots = [
  {
    id: 1,
    name: 'Instagram Assistant',
    description: 'Answers common questions about my Instagram posts and upcoming content',
    status: 'active',
    trainingSource: 'instagram',
    personality: 'friendly',
    created: '2023-04-01',
    metrics: {
      conversations: 245,
      avgRating: 4.8,
      messagesHandled: 1243
    },
    sampleConversation: [
      { role: 'user', content: 'When will you post your next cooking tutorial?' },
      { role: 'assistant', content: 'I\'m actually planning to share a new pasta recipe this Friday! Make sure to turn on notifications so you don\'t miss it. Is there any specific cooking technique you\'d like me to cover?' }
    ]
  }
];

// Sample template data
const chatbotTemplates = [
  {
    id: 'general',
    name: 'General Purpose Assistant',
    description: 'A versatile assistant that can answer a wide range of questions about your content',
    icon: <MessageSquareText size={24} className="text-indigo-600" />
  },
  {
    id: 'announcement',
    name: 'Content Announcement Bot',
    description: 'Focuses on promoting your upcoming content and increasing anticipation',
    icon: <Sparkles size={24} className="text-purple-600" />
  },
  {
    id: 'faq',
    name: 'FAQ Bot',
    description: 'Specializes in answering frequently asked questions from your audience',
    icon: <MessageSquareText size={24} className="text-green-600" />
  }
];

const ChatbotPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('existing');
  const [activeChatbotId, setActiveChatbotId] = useState<number | null>(1);
  const [createMode, setCreateMode] = useState(false);
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Chatbot</h1>
          <p className="text-gray-500">Create and manage AI chatbots for your audience</p>
        </div>
        <div>
          <Button
            leftIcon={<Plus size={16} />}
            onClick={() => {
              setActiveTab('create');
              setCreateMode(true);
            }}
          >
            Create New Chatbot
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('existing')}
            className={`py-3 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'existing'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            My Chatbots
          </button>
          <button
            onClick={() => setActiveTab('create')}
            className={`py-3 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'create'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Create New
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`py-3 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'analytics'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Analytics
          </button>
        </nav>
      </div>

      {/* Content based on active tab */}
      {activeTab === 'existing' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Chatbot list */}
          <div className="lg:col-span-4">
            <Card>
              <CardHeader>
                <CardTitle>My Chatbots</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {chatbots.map(chatbot => (
                    <div
                      key={chatbot.id}
                      onClick={() => setActiveChatbotId(chatbot.id)}
                      className={`p-3 rounded-lg cursor-pointer transition-colors ${
                        activeChatbotId === chatbot.id
                          ? 'bg-indigo-50 border border-indigo-200'
                          : 'bg-gray-50 hover:bg-gray-100 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            chatbot.status === 'active' ? 'bg-green-100' : 'bg-gray-100'
                          }`}>
                            <MessageSquareText size={16} className={`${
                              chatbot.status === 'active' ? 'text-green-600' : 'text-gray-600'
                            }`} />
                          </div>
                          <div className="ml-3">
                            <h3 className="text-sm font-medium text-gray-900">{chatbot.name}</h3>
                            <p className="text-xs text-gray-500 truncate max-w-[220px]">{chatbot.description}</p>
                          </div>
                        </div>
                        <ChevronRight size={16} className="text-gray-400" />
                      </div>
                    </div>
                  ))}
                  
                  {chatbots.length === 0 && (
                    <div className="text-center py-8">
                      <MessageSquareText size={40} className="mx-auto text-gray-300 mb-2" />
                      <p className="text-gray-500">No chatbots yet</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-3"
                        leftIcon={<Plus size={16} />}
                        onClick={() => {
                          setActiveTab('create');
                          setCreateMode(true);
                        }}
                      >
                        Create your first chatbot
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter className="border-t border-gray-200 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  leftIcon={<Plus size={16} />}
                  onClick={() => {
                    setActiveTab('create');
                    setCreateMode(true);
                  }}
                >
                  Create New Chatbot
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          {/* Chatbot details */}
          <div className="lg:col-span-8">
            {activeChatbotId && chatbots.find(c => c.id === activeChatbotId) && (
              <Card>
                <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0">
                  <CardTitle>
                    <div className="flex items-center">
                      {chatbots.find(c => c.id === activeChatbotId)?.name}
                      <div className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
                        chatbots.find(c => c.id === activeChatbotId)?.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {chatbots.find(c => c.id === activeChatbotId)?.status === 'active' ? 'Active' : 'Inactive'}
                      </div>
                    </div>
                  </CardTitle>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      leftIcon={<Settings size={16} />}
                    >
                      Settings
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      leftIcon={<Power size={16} />}
                    >
                      Toggle Status
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-xs text-gray-500">Conversations</p>
                      <p className="text-lg font-semibold">
                        {chatbots.find(c => c.id === activeChatbotId)?.metrics.conversations}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-xs text-gray-500">Messages Handled</p>
                      <p className="text-lg font-semibold">
                        {chatbots.find(c => c.id === activeChatbotId)?.metrics.messagesHandled}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-xs text-gray-500">Average Rating</p>
                      <p className="text-lg font-semibold">
                        {chatbots.find(c => c.id === activeChatbotId)?.metrics.avgRating}/5.0
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium text-gray-900">Sample Conversation</h3>
                      <Button variant="outline" size="sm">Test Chatbot</Button>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      {chatbots.find(c => c.id === activeChatbotId)?.sampleConversation.map((message, index) => (
                        <div
                          key={index}
                          className={`flex mb-4 ${message.role === 'user' ? '' : 'justify-end'}`}
                        >
                          <div
                            className={`max-w-[80%] px-4 py-2 rounded-lg ${
                              message.role === 'user'
                                ? 'bg-white text-gray-800 border border-gray-200'
                                : 'bg-indigo-600 text-white'
                            }`}
                          >
                            <div className="flex items-center mb-1">
                              {message.role === 'user' ? (
                                <>
                                  <User size={14} className="mr-1" />
                                  <span className="text-xs font-medium">User</span>
                                </>
                              ) : (
                                <>
                                  <Bot size={14} className="mr-1" />
                                  <span className="text-xs font-medium">Chatbot</span>
                                </>
                              )}
                            </div>
                            <p className="text-sm">{message.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <div className="border-t border-gray-200 pt-4">
                      <details className="group">
                        <summary className="flex items-center justify-between cursor-pointer">
                          <h3 className="font-medium text-gray-900">Chatbot Configuration</h3>
                          <ChevronDown size={16} className="text-gray-500 group-open:rotate-180 transition-transform" />
                        </summary>
                        <div className="mt-3 pl-4 space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Training Source:</span>
                            <span className="text-gray-900 font-medium">
                              {chatbots.find(c => c.id === activeChatbotId)?.trainingSource === 'instagram'
                                ? 'Instagram Content'
                                : 'YouTube Content'}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Personality:</span>
                            <span className="text-gray-900 font-medium capitalize">
                              {chatbots.find(c => c.id === activeChatbotId)?.personality}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Created:</span>
                            <span className="text-gray-900 font-medium">
                              {chatbots.find(c => c.id === activeChatbotId)?.created}
                            </span>
                          </div>
                        </div>
                      </details>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-gray-200 pt-4 flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    leftIcon={<Edit size={16} />}
                  >
                    Edit Chatbot
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    leftIcon={<Trash size={16} />}
                    className="text-red-600 hover:bg-red-50"
                  >
                    Delete
                  </Button>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      )}

      {/* Create New Chatbot */}
      {activeTab === 'create' && (
        <div>
          {createMode ? (
            <Card>
              <CardHeader>
                <CardTitle>Create a New Chatbot</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Chatbot Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="e.g., Instagram Assistant"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                      Description
                    </label>
                    <textarea
                      id="description"
                      rows={3}
                      className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="What will this chatbot help with?"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Training Content
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="border border-gray-300 rounded-md p-4 flex items-center cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          id="instagram"
                          name="trainingSource"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                          defaultChecked
                        />
                        <label htmlFor="instagram" className="flex items-center ml-3 cursor-pointer">
                          <Instagram size={20} className="text-pink-500 mr-2" />
                          <span className="text-sm text-gray-900">Instagram</span>
                        </label>
                      </div>
                      <div className="border border-gray-300 rounded-md p-4 flex items-center cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          id="youtube"
                          name="trainingSource"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                        />
                        <label htmlFor="youtube" className="flex items-center ml-3 cursor-pointer">
                          <Youtube size={20} className="text-red-500 mr-2" />
                          <span className="text-sm text-gray-900">YouTube</span>
                        </label>
                      </div>
                      <div className="border border-gray-300 rounded-md p-4 flex items-center cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          id="both"
                          name="trainingSource"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                        />
                        <label htmlFor="both" className="flex items-center ml-3 cursor-pointer">
                          <Sparkles size={20} className="text-purple-500 mr-2" />
                          <span className="text-sm text-gray-900">Both</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Chatbot Personality
                    </label>
                    <select
                      className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="friendly">Friendly and Casual</option>
                      <option value="professional">Professional and Formal</option>
                      <option value="enthusiastic">Enthusiastic and Energetic</option>
                      <option value="helpful">Helpful and Informative</option>
                    </select>
                  </div>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-md p-4">
                    <h3 className="text-sm font-medium text-amber-800 mb-2">Training Process</h3>
                    <p className="text-sm text-amber-700">
                      After creating your chatbot, our system will analyze your content and train the AI. This process typically takes 2-5 minutes depending on the amount of content.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t border-gray-200 pt-4 flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => {
                    setActiveTab('existing');
                    setCreateMode(false);
                  }}
                >
                  Cancel
                </Button>
                <Button 
                  leftIcon={<Sparkles size={16} />}
                  onClick={() => {
                    setActiveTab('existing');
                    setCreateMode(false);
                  }}
                >
                  Create Chatbot
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-6">Choose a template to get started</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {chatbotTemplates.map(template => (
                  <Card 
                    key={template.id} 
                    className="cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => setCreateMode(true)}
                  >
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
                          {template.icon}
                        </div>
                        <h3 className="font-medium text-gray-900 mb-2">{template.name}</h3>
                        <p className="text-sm text-gray-600">{template.description}</p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-4"
                        >
                          Use Template
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8 flex items-center justify-center">
                <Button 
                  leftIcon={<Plus size={16} />}
                  onClick={() => setCreateMode(true)}
                >
                  Create from Scratch
                </Button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Analytics */}
      {activeTab === 'analytics' && (
        <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg border border-gray-200">
          <div className="flex flex-col items-center text-center max-w-md p-6">
            <Loader2 size={40} className="text-indigo-600 animate-spin mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Analytics Coming Soon</h3>
            <p className="text-gray-600">
              We're building comprehensive analytics to help you understand how users interact with your chatbots. Check back soon!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotPage;