import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';

export class ConnectAccountDto {
  @ApiProperty({ enum: ['instagram', 'youtube'] })
  @IsEnum(['instagram', 'youtube'], { message: 'Platform must be either instagram or youtube' })
  platform: 'instagram' | 'youtube';

  @ApiProperty({ example: 'username' })
  @IsNotEmpty()
  username: string;

  @ApiProperty({ example: 'access_token_from_oauth', required: false })
  accessToken?: string;
}