import { Controller, Post, Body } from '@nestjs/common';
import { PubSubService } from './pubsub.service';

@Controller('pubsub')
export class PubSubController {
  constructor(private readonly pubSubService: PubSubService) {}

  @Post('publish')
  publish(@Body() payload: { channel: string; message: string }): void {
    const { channel, message } = payload;
    this.pubSubService.publish(channel, message);
  }
}
