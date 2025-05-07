import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { ChatbotService } from './chatbot.service';
import { CreateChatbotDto } from './dto/create-chatbot.dto';
import { UpdateChatbotDto } from './dto/update-chatbot.dto';
import { TestChatbotDto } from './dto/test-chatbot.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('chatbot')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('chatbot')
export class ChatbotController {
  constructor(private readonly chatbotService: ChatbotService) {}

  @ApiOperation({ summary: 'Create a new chatbot' })
  @ApiResponse({ status: 201, description: 'The chatbot has been successfully created.' })
  @Post()
  create(@Request() req, @Body() createChatbotDto: CreateChatbotDto) {
    return this.chatbotService.create(req.user.id, createChatbotDto);
  }

  @ApiOperation({ summary: 'Get all chatbots for a user' })
  @ApiResponse({ status: 200, description: 'Return all chatbots.' })
  @Get()
  findAll(@Request() req) {
    return this.chatbotService.findAll(req.user.id);
  }

  @ApiOperation({ summary: 'Get a chatbot by id' })
  @ApiResponse({ status: 200, description: 'Return the chatbot.' })
  @Get(':id')
  findOne(@Param('id') id: string, @Request() req) {
    return this.chatbotService.findOne(id, req.user.id);
  }

  @ApiOperation({ summary: 'Update a chatbot' })
  @ApiResponse({ status: 200, description: 'The chatbot has been successfully updated.' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChatbotDto: UpdateChatbotDto, @Request() req) {
    return this.chatbotService.update(id, req.user.id, updateChatbotDto);
  }

  @ApiOperation({ summary: 'Delete a chatbot' })
  @ApiResponse({ status: 200, description: 'The chatbot has been successfully deleted.' })
  @Delete(':id')
  remove(@Param('id') id: string, @Request() req) {
    return this.chatbotService.remove(id, req.user.id);
  }

  @ApiOperation({ summary: 'Test a chatbot with a sample question' })
  @ApiResponse({ status: 200, description: 'Return the chatbot response.' })
  @Post(':id/test')
  test(@Param('id') id: string, @Body() testChatbotDto: TestChatbotDto, @Request() req) {
    return this.chatbotService.test(id, req.user.id, testChatbotDto);
  }

  @ApiOperation({ summary: 'Toggle chatbot active status' })
  @ApiResponse({ status: 200, description: 'The chatbot status has been toggled.' })
  @Post(':id/toggle')
  toggle(@Param('id') id: string, @Request() req) {
    return this.chatbotService.toggle(id, req.user.id);
  }
}