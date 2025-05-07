import { Injectable } from '@nestjs/common';
import { MonetizationSuggestion } from './entities/monetization-suggestion.entity';
import { AudienceInsights } from './entities/audience-insights.entity';
import { BrandRecommendation } from './entities/brand-recommendation.entity';
import { RevenuePotential } from './entities/revenue-potential.entity';

@Injectable()
export class MonetizationService {
  getSuggestions(userId: string): MonetizationSuggestion[] {
    // In a real app, we would analyze the user's content and audience
    // For this MVP, we'll return mock suggestions
    return [
      {
        id: '1',
        userId,
        title: 'Brand Partnership Opportunity',
        description: 'Based on your audience demographics and engagement, we've identified potential matches with eco-friendly skincare brands.',
        potentialRevenue: {
          min: 500,
          max: 1500,
        },
        category: 'sponsorship',
        relevanceScore: 92,
        createdAt: new Date().toISOString(),
      },
      {
        id: '2',
        userId,
        title: 'Paid Membership Community',
        description: 'Your high engagement suggests fans would pay for exclusive content and community access.',
        potentialRevenue: {
          min: 800,
          max: 2000,
        },
        category: 'membership',
        relevanceScore: 86,
        createdAt: new Date().toISOString(),
      },
      {
        id: '3',
        userId,
        title: 'Digital Product Creation',
        description: 'Your audience is interested in cooking tutorials. Consider selling recipe ebooks or meal plans.',
        potentialRevenue: {
          min: 1000,
          max: 3000,
        },
        category: 'product',
        relevanceScore: 78,
        createdAt: new Date().toISOString(),
      },
      {
        id: '4',
        userId,
        title: 'Online Course Opportunity',
        description: 'Your expertise in photography resonates with your audience. A beginner's photography course would likely succeed.',
        potentialRevenue: {
          min: 2000,
          max: 5000,
        },
        category: 'course',
        relevanceScore: 74,
        createdAt: new Date().toISOString(),
      },
    ];
  }

  getAudienceInsights(userId: string): AudienceInsights {
    // In a real app, we would analyze the user's audience
    // For this MVP, we'll return mock insights
    return {
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
      },
      engagement: {
        avgLikes: 462,
        avgComments: 28,
        avgShares: 75,
        followersGrowth: 8.7
      }
    };
  }

  getRecommendedBrands(userId: string): BrandRecommendation[] {
    // In a real app, we would analyze the user's content and audience to match with brands
    // For this MVP, we'll return mock brand recommendations
    return [
      {
        id: '1',
        name: 'EcoBeauty',
        relevance: 94,
        category: 'Skincare',
        logo: 'https://ui-avatars.com/api/?name=EB&background=34D399&color=fff',
        description: 'Eco-friendly skincare products made with natural ingredients',
        audienceMatch: 92,
        estimatedPayment: '$500 - $1,000 per post',
      },
      {
        id: '2',
        name: 'FitStyle',
        relevance: 88,
        category: 'Activewear',
        logo: 'https://ui-avatars.com/api/?name=FS&background=8B5CF6&color=fff',
        description: 'Stylish and comfortable activewear for the modern woman',
        audienceMatch: 86,
        estimatedPayment: '$400 - $800 per post',
      },
      {
        id: '3',
        name: 'TravelPlus',
        relevance: 82,
        category: 'Travel Accessories',
        logo: 'https://ui-avatars.com/api/?name=TP&background=F97316&color=fff',
        description: 'Innovative travel accessories for the adventurous traveler',
        audienceMatch: 78,
        estimatedPayment: '$350 - $700 per post',
      },
    ];
  }

  getRevenuePotential(userId: string): RevenuePotential {
    // In a real app, we would analyze the user's content, audience, and engagement
    // For this MVP, we'll return mock revenue potential
    return {
      total: {
        min: 4300,
        max: 12500,
      },
      breakdown: [
        {
          category: 'Sponsorships',
          amount: {
            min: 2000,
            max: 5000,
          },
          percentage: 40,
        },
        {
          category: 'Digital Products',
          amount: {
            min: 1000,
            max: 3000,
          },
          percentage: 24,
        },
        {
          category: 'Memberships',
          amount: {
            min: 800,
            max: 2500,
          },
          percentage: 20,
        },
        {
          category: 'Affiliate Marketing',
          amount: {
            min: 500,
            max: 2000,
          },
          percentage: 16,
        },
      ],
      averagePerPost: 215,
      growthRate: 32.8,
    };
  }
}