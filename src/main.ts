import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Redis } from 'ioredis';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  const sub = new Redis();
  sub.subscribe('my-channel-1', 'my-channel-2', (err, count) => {
    if (err) {
      // Just like other commands, subscribe() can fail for some reasons,
      // ex network issues.
      console.error('Failed to subscribe: %s', err.message);
    } else {
      // `count` represents the number of channels this client are currently subscribed to.
      console.log(
        `Subscribed successfully! This client is currently subscribed to ${count} channels.`,
      );
    }
  });

  sub.on('message', (channel, message) => {
    console.log(`Received ${message} from ${channel}`);
  });
}
bootstrap();
