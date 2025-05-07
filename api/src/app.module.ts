import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ContentAnalysisModule } from './content-analysis/content-analysis.module';
import { ChatbotModule } from './chatbot/chatbot.module';
import { MonetizationModule } from './monetization/monetization.module';
import { SocialAccountsModule } from './social-accounts/social-accounts.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UsersModule,
    ContentAnalysisModule,
    ChatbotModule,
    MonetizationModule,
    SocialAccountsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}