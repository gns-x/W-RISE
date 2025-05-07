import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateChatbotDto } from './dto/create-chatbot.dto';
import { UpdateChatbotDto } from './dto/update-chatbot.dto';
import { TestChatbotDto } from './dto/test-chatbot.dto';
import { Chatbot } from './entities/chatbot.entity';

@Injectable()
export class ChatbotService {
  // In a real app, we would use a database
  // For this MVP, we'll use an in-memory store
  private readonly chatbots: Chatbot[] = [
    {
      id: '1',
      userId: '1',
      name: 'Instagram Assistant',
      description: 'Answers common questions about my Instagram posts and upcoming content',
      trainingContent: 'instagram',
      personality: 'friendly',
      active: true,
      createdAt: new Date().toISOString(),
      exampleConversations: [
        {
          question: 'When will you post your next cooking tutorial?',
          answer: 'I\'m actually planning to share a new pasta recipe this Friday! Make sure to turn on notifications so you don\'t miss it. Is there any specific cooking technique you\'d like me to cover?'
        },
        {
          question: 'Do you offer online classes for photography?',
          answer: 'I don\'t currently offer formal classes, but I\'m planning to launch a beginner\'s photography course next month! If you\'re interested, you can join my waitlist by clicking the link in my bio. In the meantime, I post weekly photography tips in my stories!'
        }
      ]
    }
  ];

  create(userId: string, createChatbotDto: CreateChatbotDto): Chatbot {
    // In a real app, we would train an AI model on the user's content
    // For this MVP, we'll simulate the creation with sample conversations
    
    const newChatbot = {
      id: Math.random().toString(36).substr(2, 9),
      userId,
      ...createChatbotDto,
      active: true,
      createdAt: new Date().toISOString(),
      exampleConversations: [
        {
          question: 'When will you post your next video?',
          answer: createChatbotDto.personality === 'friendly'
            ? 'I\'m planning to post a new video this weekend! Stay tuned!'
            : 'A new video is scheduled for release this Saturday at 9:00 AM EST.'
        },
        {
          question: 'How can I support your content?',
          answer: createChatbotDto.personality === 'friendly'
            ? 'Thanks for asking! The best way is to like, comment, and share my posts. It really helps me reach more people!'
            : 'Thank you for your interest. You can support my work by engaging with my content through likes, comments, and shares, which increases visibility.'
        }
      ]
    };
    
    this.chatbots.push(newChatbot);
    return newChatbot;
  }

  findAll(userId: string): Chatbot[] {
    return this.chatbots.filter(chatbot => chatbot.userId === userId);
  }

  findOne(id: string, userId: string): Chatbot {
    const chatbot = this.chatbots.find(chatbot => chatbot.id === id);
    if (!chatbot) {
      throw new NotFoundException(`Chatbot with ID ${id} not found`);
    }
    if (chatbot.userId !== userId) {
      throw new UnauthorizedException('You do not have permission to access this chatbot');
    }
    return chatbot;
  }

  update(id: string, userId: string, updateChatbotDto: UpdateChatbotDto): Chatbot {
    const chatbotIndex = this.chatbots.findIndex(chatbot => chatbot.id === id && chatbot.userId === userId);
    if (chatbotIndex === -1) {
      throw new NotFoundException(`Chatbot with ID ${id} not found or you don't have permission`);
    }
    
    const updatedChatbot = {
      ...this.chatbots[chatbotIndex],
      ...updateChatbotDto,
    };
    
    this.chatbots[chatbotIndex] = updatedChatbot;
    return updatedChatbot;
  }

  remove(id: string, userId: string): Chatbot {
    const chatbotIndex = this.chatbots.findIndex(chatbot => chatbot.id === id && chatbot.userId === userId);
    if (chatbotIndex === -1) {
      throw new NotFoundException(`Chatbot with ID ${id} not found or you don't have permission`);
    }
    
    const deletedChatbot = this.chatbots[chatbotIndex];
    this.chatbots.splice(chatbotIndex, 1);
    return deletedChatbot;
  }

  test(id: string, userId: string, testChatbotDto: TestChatbotDto): { answer: string } {
    // Find the chatbot
    const chatbot = this.findOne(id, userId);
    
    // In a real app, we would call an AI model to generate a response
    // For this MVP, we'll simulate the response based on the personality
    
    // Generate a response based on the question and chatbot personality
    let answer = '';
    
    if (testChatbotDto.question.toLowerCase().includes('when')) {
      answer = chatbot.personality === 'friendly'
        ? 'I\'m planning to post new content this weekend! Can\'t wait to share it with you!'
        : 'New content is scheduled for publication this Saturday at 9:00 AM EST.';
    } else if (testChatbotDto.question.toLowerCase().includes('how')) {
      answer = chatbot.personality === 'friendly'
        ? 'It\'s super easy! Just follow the steps in my latest tutorial. Let me know if you need any help!'
        : 'The process is thoroughly explained in my most recent instructional video. Please refer to the timestamp markers for specific sections.';
    } else if (testChatbotDto.question.toLowerCase().includes('recommend')) {
      answer = chatbot.personality === 'friendly'
        ? 'I love the products from Brand X! They\'ve been amazing for me, and I think you\'d love them too!'
        : 'Based on industry testing and personal experience, I can recommend products from Brand X for their quality and effectiveness.';
    } else {
      answer = chatbot.personality === 'friendly'
        ? 'Thanks for reaching out! I appreciate your question and would love to help. Could you provide a bit more detail so I can give you the best answer?'
        : 'Thank you for your inquiry. To provide you with the most accurate information, could you please elaborate on your question?';
    }
    
    return { answer };
  }

  toggle(id: string, userId: string): Chatbot {
    const chatbotIndex = this.chatbots.findIndex(chatbot => chatbot.id === id && chatbot.userId === userId);
    if (chatbotIndex === -1) {
      throw new NotFoundException(`Chatbot with ID ${id} not found or you don't have permission`);
    }
    
    const updatedChatbot = {
      ...this.chatbots[chatbotIndex],
      active: !this.chatbots[chatbotIndex].active,
    };
    
    this.chatbots[chatbotIndex] = updatedChatbot;
    return updatedChatbot;
  }
}