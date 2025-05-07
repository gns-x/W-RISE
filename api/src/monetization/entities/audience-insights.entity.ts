export class AudienceInsights {
  demographics: {
    ageGroups: Array<{
      label: string;
      percentage: number;
    }>;
    topLocations: Array<{
      name: string;
      percentage: number;
    }>;
    genderSplit: {
      male: number;
      female: number;
      other: number;
    };
  };
  interests: Array<{
    name: string;
    percentage: number;
  }>;
  purchasingPower: {
    lowIncome: number;
    middleIncome: number;
    highIncome: number;
  };
  engagement: {
    avgLikes: number;
    avgComments: number;
    avgShares: number;
    followersGrowth: number;
  };
}