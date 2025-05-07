import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { ConnectAccountDto } from './dto/connect-account.dto';
import { SocialAccount } from './entities/social-account.entity';

@Injectable()
export class SocialAccountsService {
  private readonly socialAccounts: SocialAccount[] = [
    {
      id: '1',
      userId: '1',
      platform: 'instagram',
      username: 'creatorhandle',
      connected: true,
      followers: 12400,
      avatar: 'https://ui-avatars.com/api/?name=IG&background=E1306C&color=fff',
      connectionDate: new Date().toISOString(),
    },
  ];

  connect(userId: string, connectAccountDto: ConnectAccountDto): SocialAccount {
    // In a real app, we would connect to Instagram/YouTube API
    // For this MVP, we'll simulate the connection

    const newAccount = {
      id: Math.random().toString(36).substr(2, 9),
      userId,
      platform: connectAccountDto.platform,
      username: connectAccountDto.username,
      connected: true,
      followers: Math.floor(Math.random() * 50000),
      avatar: `https://ui-avatars.com/api/?name=${connectAccountDto.platform === 'instagram' ? 'IG' : 'YT'}&background=${connectAccountDto.platform === 'instagram' ? 'E1306C' : 'FF0000'}&color=fff`,
      connectionDate: new Date().toISOString(),
    };

    this.socialAccounts.push(newAccount);
    return newAccount;
  }

  findAllByUserId(userId: string): SocialAccount[] {
    return this.socialAccounts.filter(account => account.userId === userId);
  }

  findOne(id: string, userId: string): SocialAccount {
    const account = this.socialAccounts.find(account => account.id === id);
    if (!account) {
      throw new NotFoundException(`Social account with ID ${id} not found`);
    }
    if (account.userId !== userId) {
      throw new UnauthorizedException('You do not have permission to access this account');
    }
    return account;
  }

  disconnect(id: string, userId: string): SocialAccount {
    const accountIndex = this.socialAccounts.findIndex(account => account.id === id && account.userId === userId);
    if (accountIndex === -1) {
      throw new NotFoundException(`Social account with ID ${id} not found or you don't have permission`);
    }
    
    const disconnectedAccount = {
      ...this.socialAccounts[accountIndex],
      connected: false,
    };
    
    this.socialAccounts[accountIndex] = disconnectedAccount;
    return disconnectedAccount;
  }
}