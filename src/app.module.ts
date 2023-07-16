import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PubSubController } from './pubsub/pubsub.controller';
import { PubSubService } from './pubsub/pubsub.service';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
  ],
  controllers: [AppController, PubSubController],
  providers: [AppService, PubSubService],
})
export class AppModule {}
