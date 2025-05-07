export class SocialAccount {
  id: string;
  userId: string;
  platform: 'instagram' | 'youtube';
  username: string;
  connected: boolean;
  avatar?: string;
  followers?: number;
  connectionDate?: string;
}