import { Controller, Get, Inject } from '@nestjs/common';
import { PubSubService } from './pubsub/pubsub.service';
import { Observable } from 'rxjs';

@Controller('posts')
export class AppController {
  constructor(
    @Inject(PubSubService) private readonly pubSubService: PubSubService,
  ) {}
}
