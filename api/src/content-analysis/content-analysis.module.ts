import { Module } from '@nestjs/common';
import { ContentAnalysisService } from './content-analysis.service';
import { ContentAnalysisController } from './content-analysis.controller';
import { SocialAccountsModule } from '../social-accounts/social-accounts.module';

@Module({
  imports: [SocialAccountsModule],
  controllers: [ContentAnalysisController],
  providers: [ContentAnalysisService],
  exports: [ContentAnalysisService],
})
export class ContentAnalysisModule {}