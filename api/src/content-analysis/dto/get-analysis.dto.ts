import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';

export class GetAnalysisDto {
  @ApiProperty({ enum: ['week', 'month', 'year'], default: 'week' })
  @IsEnum(['week', 'month', 'year'], { message: 'Period must be week, month, or year' })
  period: 'week' | 'month' | 'year' = 'week';
}