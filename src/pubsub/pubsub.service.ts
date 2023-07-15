import { Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';

@Injectable()
export class PubSubService {
  private readonly redisClient: Redis;

  constructor() {
    this.redisClient = new Redis(); // Connect to Redis
  }

  publish(channel: string, message: string): void {
    this.redisClient.publish(channel, message);
  }
}
