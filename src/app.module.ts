import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PubSubController } from './pubsub/pubsub.controller';
import { PubSubService } from './pubsub/pubsub.service';

@Module({
  imports: [],
  controllers: [AppController, PubSubController],
  providers: [AppService, PubSubService],
})
export class AppModule {}
