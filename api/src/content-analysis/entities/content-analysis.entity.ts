import { TopContent } from './top-content.entity';

export class ContentAnalysis {
  id: string;
  accountId: string;
  platform: 'instagram' | 'youtube';
  metrics: {
    engagementRate: number;
    commentRate: number;
    viewsGrowth: number;
    followersGrowth: number;
  };
  topContent: TopContent[];
  period: 'week' | 'month' | 'year';
  createdAt: string;
}