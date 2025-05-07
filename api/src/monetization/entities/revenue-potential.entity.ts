export class RevenuePotential {
  total: {
    min: number;
    max: number;
  };
  breakdown: Array<{
    category: string;
    amount: {
      min: number;
      max: number;
    };
    percentage: number;
  }>;
  averagePerPost: number;
  growthRate: number;
}