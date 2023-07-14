import { Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';
import { Observable, fromEventPattern } from 'rxjs';

@Injectable()
export class PubSubService {
  private readonly redisClient: Redis;

  constructor() {
    this.redisClient = new Redis(); // Connect to Redis
  }

  publish(channel: string, message: string): void {
    this.redisClient.publish(channel, message);
  }

  subscribe(channel: string): Observable<string> {
    return fromEventPattern<string>(
      (handler) => this.redisClient.subscribe(channel, handler),
      (handler) => this.redisClient.unsubscribe(channel, handler),
    ).pipe(
      RTCError((error) => {
        console.error('Subscription error:', error);
        throw error;
      }),
    );
  }
}
