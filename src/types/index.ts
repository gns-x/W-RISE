export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt: string;
}

export interface SocialAccount {
  id: string;
  platform: 'instagram' | 'youtube';
  username: string;
  connected: boolean;
  avatar?: string;
  followers?: number;
  connectionDate?: string;
  userId: string;
}

export interface ContentAnalysis {
  id: string;
  accountId: string;
  platform: 'instagram' | 'youtube';
  metrics: {
    engagementRate: number;
    commentRate: number;
    viewsGrowth: number;
    followersGrowth: number;
  };
  topContent: Array<{
    id: string;
    title: string;
    url: string;
    engagement: number;
    publishDate: string;
  }>;
  period: 'week' | 'month' | 'year';
  createdAt: string;
}

export interface ChatbotConfig {
  id: string;
  userId: string;
  name: string;
  description?: string;
  trainingContent: 'instagram' | 'youtube' | 'both';
  personality: 'friendly' | 'professional' | 'casual' | 'enthusiastic';
  active: boolean;
  createdAt: string;
  exampleConversations: Array<{
    question: string;
    answer: string;
  }>;
}

export interface MonetizationSuggestion {
  id: string;
  userId: string;
  title: string;
  description: string;
  potentialRevenue: {
    min: number;
    max: number;
  };
  category: 'sponsorship' | 'product' | 'membership' | 'course';
  relevanceScore: number;
  createdAt: string;
}