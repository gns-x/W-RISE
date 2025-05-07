import { PartialType } from '@nestjs/swagger';
import { CreateChatbotDto } from './create-chatbot.dto';
import { IsBoolean, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateChatbotDto extends PartialType(CreateChatbotDto) {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  active?: boolean;
}