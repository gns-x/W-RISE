export class Chatbot {
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