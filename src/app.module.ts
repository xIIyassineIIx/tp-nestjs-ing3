import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TravelModule } from './travel/travel.module.js';

@Module({
  imports: [TravelModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
