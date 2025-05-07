import { Module } from '@nestjs/common';
import { MonetizationService } from './monetization.service';
import { MonetizationController } from './monetization.controller';
import { ContentAnalysisModule } from '../content-analysis/content-analysis.module';

@Module({
  imports: [ContentAnalysisModule],
  controllers: [MonetizationController],
  providers: [MonetizationService],
})
export class MonetizationModule {}