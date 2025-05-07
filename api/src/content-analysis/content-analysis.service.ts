import { Injectable, NotFoundException } from '@nestjs/common';
import { SocialAccountsService } from '../social-accounts/social-accounts.service';
import { ContentAnalysis } from './entities/content-analysis.entity';
import { ContentInsight } from './entities/content-insight.entity';
import { TopContent } from './entities/top-content.entity';

@Injectable()
export class ContentAnalysisService {
  constructor(private readonly socialAccountsService: SocialAccountsService) {}

  getAnalysis(platform: 'instagram' | 'youtube', period: 'week' | 'month' | 'year', userId: string): ContentAnalysis {
    // Check if the user has this platform connected
    const accounts = this.socialAccountsService.findAllByUserId(userId);
    const account = accounts.find(acc => acc.platform === platform && acc.connected);
    
    if (!account) {
      throw new NotFoundException(`No connected ${platform} account found`);
    }
    
    // In a real app, we would fetch data from Instagram/YouTube API
    // For this MVP, we'll return mock data
    return {
      id: Math.random().toString(36).substr(2, 9),
      accountId: account.id,
      platform,
      metrics: {
        engagementRate: platform === 'instagram' ? 4.3 : 5.8,
        commentRate: platform === 'instagram' ? 1.2 : 2.5,
        viewsGrowth: platform === 'instagram' ? 12.5 : 18.3,
        followersGrowth: platform === 'instagram' ? 8.2 : 10.4,
      },
      topContent: this.generateMockTopContent(platform, 5),
      period,
      createdAt: new Date().toISOString(),
    };
  }

  getTopContent(platform: 'instagram' | 'youtube', period: 'week' | 'month' | 'year', userId: string): TopContent[] {
    // Check if the user has this platform connected
    const accounts = this.socialAccountsService.findAllByUserId(userId);
    const account = accounts.find(acc => acc.platform === platform && acc.connected);
    
    if (!account) {
      throw new NotFoundException(`No connected ${platform} account found`);
    }
    
    // Return mock top content
    return this.generateMockTopContent(platform, 10);
  }

  getInsights(platform: 'instagram' | 'youtube', period: 'week' | 'month' | 'year', userId: string): ContentInsight[] {
    // Check if the user has this platform connected
    const accounts = this.socialAccountsService.findAllByUserId(userId);
    const account = accounts.find(acc => acc.platform === platform && acc.connected);
    
    if (!account) {
      throw new NotFoundException(`No connected ${platform} account found`);
    }
    
    // Return mock insights
    return [
      {
        id: '1',
        type: 'positive',
        metric: 'Engagement Rate',
        value: '+24%',
        text: platform === 'instagram' 
          ? 'Your reels are getting higher engagement than your regular posts' 
          : 'Videos longer than 10 minutes have higher engagement',
      },
      {
        id: '2',
        type: 'negative',
        metric: 'Post Frequency',
        value: '-15%',
        text: 'Your posting frequency has decreased compared to last month',
      },
      {
        id: '3',
        type: 'positive',
        metric: 'Comments',
        value: '+37%',
        text: 'Content with personal stories receives more comments',
      },
    ];
  }

  private generateMockTopContent(platform: 'instagram' | 'youtube', count: number): TopContent[] {
    const result: TopContent[] = [];
    
    const titles = platform === 'instagram'
      ? [
          'How I Gained 10K Followers in One Month',
          'My Morning Routine as a Content Creator',
          'Behind the Scenes of My Latest Photoshoot',
          '5 Tips for Instagram Growth in 2023',
          'What I Eat in a Day as a Fitness Influencer',
          'My Skincare Routine for Glowing Skin',
          'How to Take Better Photos with Your Phone',
          'My Favorite Editing Apps for Instagram',
          'Creating a Cohesive Instagram Feed',
          'Q&A: Answering Your Top Questions',
        ]
      : [
          'How I Grew My YouTube Channel to 100K Subscribers',
          'My YouTube Studio Tour 2023',
          'How Much Money I Make on YouTube',
          'YouTube Algorithm Explained: How to Get More Views',
          'Behind the Scenes of My Video Production',
          'My Camera Gear for YouTube Videos',
          'How to Start a YouTube Channel in 2023',
          'YouTube SEO Tips for Beginners',
          'How to Edit Videos Faster',
          'My Top 10 YouTube Growth Strategies',
        ];
    
    for (let i = 0; i < count; i++) {
      result.push({
        id: Math.random().toString(36).substr(2, 9),
        title: titles[i],
        url: '#',
        engagement: Math.floor(Math.random() * 15) + 2,
        publishDate: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000).toISOString(),
      });
    }
    
    return result;
  }
}