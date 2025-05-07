import { Controller, Get, Param, Query, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { ContentAnalysisService } from './content-analysis.service';
import { GetAnalysisDto } from './dto/get-analysis.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('content-analysis')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('content-analysis')
export class ContentAnalysisController {
  constructor(private readonly contentAnalysisService: ContentAnalysisService) {}

  @ApiOperation({ summary: 'Get content analysis for a specific platform' })
  @ApiResponse({ status: 200, description: 'Return content analysis.' })
  @Get(':platform')
  getAnalysis(
    @Param('platform') platform: 'instagram' | 'youtube',
    @Query() getAnalysisDto: GetAnalysisDto,
    @Request() req,
  ) {
    return this.contentAnalysisService.getAnalysis(platform, getAnalysisDto.period, req.user.id);
  }

  @ApiOperation({ summary: 'Get top performing content' })
  @ApiResponse({ status: 200, description: 'Return top performing content.' })
  @Get('top/:platform')
  getTopContent(
    @Param('platform') platform: 'instagram' | 'youtube',
    @Query() getAnalysisDto: GetAnalysisDto,
    @Request() req,
  ) {
    return this.contentAnalysisService.getTopContent(platform, getAnalysisDto.period, req.user.id);
  }

  @ApiOperation({ summary: 'Get content insights' })
  @ApiResponse({ status: 200, description: 'Return content insights.' })
  @Get('insights/:platform')
  getInsights(
    @Param('platform') platform: 'instagram' | 'youtube',
    @Query() getAnalysisDto: GetAnalysisDto,
    @Request() req,
  ) {
    return this.contentAnalysisService.getInsights(platform, getAnalysisDto.period, req.user.id);
  }
}