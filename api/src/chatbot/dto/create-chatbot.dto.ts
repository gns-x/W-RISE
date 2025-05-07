import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateChatbotDto {
  @ApiProperty({ example: 'Instagram Assistant' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'Answers common questions about my Instagram posts', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ enum: ['instagram', 'youtube', 'both'] })
  @IsEnum(['instagram', 'youtube', 'both'], { message: 'Training content must be instagram, youtube, or both' })
  trainingContent: 'instagram' | 'youtube' | 'both';

  @ApiProperty({ enum: ['friendly', 'professional', 'casual', 'enthusiastic'] })
  @IsEnum(['friendly', 'professional', 'casual', 'enthusiastic'], { message: 'Personality must be friendly, professional, casual, or enthusiastic' })
  personality: 'friendly' | 'professional' | 'casual' | 'enthusiastic';
}