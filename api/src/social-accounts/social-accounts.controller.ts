import { Controller, Get, Post, Body, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { SocialAccountsService } from './social-accounts.service';
import { ConnectAccountDto } from './dto/connect-account.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('social-accounts')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('social-accounts')
export class SocialAccountsController {
  constructor(private readonly socialAccountsService: SocialAccountsService) {}

  @ApiOperation({ summary: 'Connect a social media account' })
  @ApiResponse({ status: 201, description: 'The account has been successfully connected.' })
  @Post()
  connect(@Request() req, @Body() connectAccountDto: ConnectAccountDto) {
    return this.socialAccountsService.connect(req.user.id, connectAccountDto);
  }

  @ApiOperation({ summary: 'Get all connected accounts for a user' })
  @ApiResponse({ status: 200, description: 'Return all connected accounts.' })
  @Get()
  findAll(@Request() req) {
    return this.socialAccountsService.findAllByUserId(req.user.id);
  }

  @ApiOperation({ summary: 'Get a connected account by id' })
  @ApiResponse({ status: 200, description: 'Return the connected account.' })
  @Get(':id')
  findOne(@Param('id') id: string, @Request() req) {
    return this.socialAccountsService.findOne(id, req.user.id);
  }

  @ApiOperation({ summary: 'Disconnect a social media account' })
  @ApiResponse({ status: 200, description: 'The account has been successfully disconnected.' })
  @Delete(':id')
  disconnect(@Param('id') id: string, @Request() req) {
    return this.socialAccountsService.disconnect(id, req.user.id);
  }
}