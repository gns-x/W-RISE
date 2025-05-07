import React from 'react';
import { 
  DollarSign, 
  Users, 
  ArrowUpRight, 
  TrendingUp, 
  ChevronRight, 
  Star, 
  Zap, 
  ShoppingBag,
  Newspaper,
  Gift,
  Coins,
  Filter
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';

// Sample monetization suggestions
const monetizationSuggestions = [
  {
    id: 1,
    type: 'sponsorship',
    title: 'Brand Partnership Opportunity',
    description: 'Based on your audience demographics and engagement, weve identified potential matches with eco-friendly skincare brands.',
    relevanceScore: 92,
    estimatedRevenue: '$500 - $1,500 per post',
    actionRequired: 'Complete brand profile',
    icon: <ShoppingBag size={18} className="text-blue-500" />
  },
  {
    id: 2,
    type: 'membership',
    title: 'Paid Membership Community',
    description: 'Your high engagement suggests fans would pay for exclusive content and community access.',
    relevanceScore: 86,
    estimatedRevenue: '$800 - $2,000 monthly',
    actionRequired: 'Set up membership tiers',
    icon: <Users size={18} className="text-purple-500" />
  },
  {
    id: 3,
    type: 'product',
    title: 'Digital Product Creation',
    description: 'Your audience is interested in cooking tutorials. Consider selling recipe ebooks or meal plans.',
    relevanceScore: 78,
    estimatedRevenue: '$1,000 - $3,000 per launch',
    actionRequired: 'Create product outline',
    icon: <Gift size={18} className="text-green-500" />
  },
  {
    id: 4,
    type: 'course',
    title: 'Online Course Opportunity',
    description: 'Your expertise in photography resonates with your audience. A beginners photography course would likely succeed.',
    relevanceScore: 74,
    estimatedRevenue: '$2,000 - $5,000 per launch',
    actionRequired: 'Create course outline',
    icon: <Zap size={18} className="text-amber-500" />
  }
];

// Sample audience data
const audienceData = {
  demographics: {
    ageGroups: [
      { label: '18-24', percentage: 35 },
      { label: '25-34', percentage: 42 },
      { label: '35-44', percentage: 15 },
      { label: '45+', percentage: 8 }
    ],
    topLocations: [
      { name: 'United States', percentage: 45 },
      { name: 'United Kingdom', percentage: 15 },
      { name: 'Canada', percentage: 12 },
      { name: 'Australia', percentage: 8 },
      { name: 'Germany', percentage: 5 }
    ],
    genderSplit: { male: 35, female: 62, other: 3 }
  },
  interests: [
    { name: 'Fashion', percentage: 78 },
    { name: 'Beauty & Makeup', percentage: 72 },
    { name: 'Travel', percentage: 65 },
    { name: 'Fitness', percentage: 54 },
    { name: 'Food & Cooking', percentage: 48 }
  ],
  purchasingPower: {
    lowIncome: 22,
    middleIncome: 58,
    highIncome: 20
  }
};

// Sample recommended brands for partnerships
const recommendedBrands = [
  { id: 1, name: 'EcoBeauty', relevance: 94, category: 'Skincare', logo: 'https://ui-avatars.com/api/?name=EB&background=34D399&color=fff' },
  { id: 2, name: 'FitStyle', relevance: 88, category: 'Activewear', logo: 'https://ui-avatars.com/api/?name=FS&background=8B5CF6&color=fff' },
  { id: 3, name: 'TravelPlus', relevance: 82, category: 'Travel Accessories', logo: 'https://ui-avatars.com/api/?name=TP&background=F97316&color=fff' },
];

const Monetization: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Monetization</h1>
          <p className="text-gray-500">AI-powered revenue opportunities tailored to your content</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" leftIcon={<Filter size={16} />}>
            Filter Suggestions
          </Button>
          <Button leftIcon={<DollarSign size={16} />}>
            Revenue Calculator
          </Button>
        </div>
      </div>
      
      {/* Revenue overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="pt-5">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Revenue Potential</p>
                <p className="text-2xl font-bold mt-1">$4.3K - $12.5K</p>
              </div>
              <div className="p-2 bg-green-50 rounded-lg">
                <DollarSign size={20} className="text-green-600" />
              </div>
            </div>
            <div className="flex items-center mt-2">
              <ArrowUpRight size={16} className="text-green-500 mr-1" />
              <span className="text-green-500 text-sm font-medium">32.8%</span>
              <span className="text-gray-500 text-xs ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-5">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Average Earnings per Post</p>
                <p className="text-2xl font-bold mt-1">$215</p>
              </div>
              <div className="p-2 bg-indigo-50 rounded-lg">
                <Newspaper size={20} className="text-indigo-600" />
              </div>
            </div>
            <div className="flex items-center mt-2">
              <ArrowUpRight size={16} className="text-green-500 mr-1" />
              <span className="text-green-500 text-sm font-medium">14.2%</span>
              <span className="text-gray-500 text-xs ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-5">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Monetizable Audience</p>
                <p className="text-2xl font-bold mt-1">9.7K</p>
              </div>
              <div className="p-2 bg-purple-50 rounded-lg">
                <Coins size={20} className="text-purple-600" />
              </div>
            </div>
            <div className="flex items-center mt-2">
              <ArrowUpRight size={16} className="text-green-500 mr-1" />
              <span className="text-green-500 text-sm font-medium">8.7%</span>
              <span className="text-gray-500 text-xs ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Monetization suggestions and audience insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Monetization suggestions */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Monetization Opportunities</CardTitle>
              <Button variant="outline" size="sm">View All</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monetizationSuggestions.map(suggestion => (
                  <div key={suggestion.id} className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex">
                      <div className="p-2 rounded-lg bg-gray-50 mr-4">
                        {suggestion.icon}
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium text-gray-900">{suggestion.title}</h3>
                            <div className="bg-green-100 text-green-800 text-xs px-1.5 py-0.5 rounded-full">
                              {suggestion.relevanceScore}% match
                            </div>
                          </div>
                          <div className="text-xs text-gray-500">{suggestion.type}</div>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{suggestion.description}</p>
                        <div className="flex items-center justify-between text-sm">
                          <div className="text-gray-700">
                            <span className="font-medium">Est. Revenue:</span> {suggestion.estimatedRevenue}
                          </div>
                          <Button variant="outline" size="sm" rightIcon={<ChevronRight size={14} />}>
                            {suggestion.actionRequired}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Audience insights */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Audience Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Age Distribution</h3>
                  <div className="space-y-2">
                    {audienceData.demographics.ageGroups.map((age, index) => (
                      <div key={index} className="flex items-center">
                        <span className="text-xs text-gray-600 w-12">{age.label}</span>
                        <div className="flex-grow mx-2">
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-indigo-600 rounded-full" 
                              style={{ width: `${age.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                        <span className="text-xs font-medium text-gray-700">{age.percentage}%</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Top Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {audienceData.interests.map((interest, index) => (
                      <div key={index} className="bg-indigo-50 text-indigo-700 text-xs px-2 py-1 rounded-full">
                        {interest.name} ({interest.percentage}%)
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Purchasing Power</h3>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full flex">
                      <div className="bg-amber-400" style={{ width: `${audienceData.purchasingPower.lowIncome}%` }}></div>
                      <div className="bg-amber-500" style={{ width: `${audienceData.purchasingPower.middleIncome}%` }}></div>
                      <div className="bg-amber-600" style={{ width: `${audienceData.purchasingPower.highIncome}%` }}></div>
                    </div>
                  </div>
                  <div className="flex justify-between mt-1 text-xs text-gray-600">
                    <span>Low Income ({audienceData.purchasingPower.lowIncome}%)</span>
                    <span>Middle Income ({audienceData.purchasingPower.middleIncome}%)</span>
                    <span>High Income ({audienceData.purchasingPower.highIncome}%)</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Brand Matches</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recommendedBrands.map(brand => (
                  <div key={brand.id} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <img 
                      src={brand.logo} 
                      alt={brand.name} 
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div className="flex-grow">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-gray-900">{brand.name}</h3>
                        <div className="flex items-center">
                          <Star size={12} className="text-amber-500 mr-0.5" />
                          <span className="text-xs font-medium">{brand.relevance}%</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600">{brand.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="border-t border-gray-200 pt-4">
              <Button variant="outline" size="sm" fullWidth>
                View All Brand Matches
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      
      {/* Revenue calculator */}
      <Card>
        <CardHeader>
          <CardTitle>Revenue Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-6 bg-indigo-50 rounded-lg text-center">
            <TrendingUp size={40} className="mx-auto text-indigo-600 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Calculate Your Potential Earnings</h3>
            <p className="text-gray-700 mb-4">Based on your content and audience metrics, estimate how much you could earn from different monetization strategies.</p>
            <Button>
              Launch Calculator
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Monetization;