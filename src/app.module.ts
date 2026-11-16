import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TravelModule } from './travel/travel.module.js';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TravelModule,ConfigModule.forRoot({
isGlobal: true,
}),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
