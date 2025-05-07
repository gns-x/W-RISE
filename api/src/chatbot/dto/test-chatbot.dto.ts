import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class TestChatbotDto {
  @ApiProperty({ example: 'When will you post your next video?' })
  @IsNotEmpty()
  @IsString()
  question: string;
}