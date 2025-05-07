import { Controller, Get, Param, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { MonetizationService } from './monetization.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('monetization')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('monetization')
export class MonetizationController {
  constructor(private readonly monetizationService: MonetizationService) {}

  @ApiOperation({ summary: 'Get monetization suggestions for a user' })
  @ApiResponse({ status: 200, description: 'Return monetization suggestions.' })
  @Get('suggestions')
  getSuggestions(@Request() req) {
    return this.monetizationService.getSuggestions(req.user.id);
  }

  @ApiOperation({ summary: 'Get audience insights for a user' })
  @ApiResponse({ status: 200, description: 'Return audience insights.' })
  @Get('audience')
  getAudienceInsights(@Request() req) {
    return this.monetizationService.getAudienceInsights(req.user.id);
  }

  @ApiOperation({ summary: 'Get recommended brands for partnerships' })
  @ApiResponse({ status: 200, description: 'Return recommended brands.' })
  @Get('brands')
  getRecommendedBrands(@Request() req) {
    return this.monetizationService.getRecommendedBrands(req.user.id);
  }

  @ApiOperation({ summary: 'Get revenue potential estimate' })
  @ApiResponse({ status: 200, description: 'Return revenue potential.' })
  @Get('revenue-potential')
  getRevenuePotential(@Request() req) {
    return this.monetizationService.getRevenuePotential(req.user.id);
  }
}