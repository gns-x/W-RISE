export class MonetizationSuggestion {
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