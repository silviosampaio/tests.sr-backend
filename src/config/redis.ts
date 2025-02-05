import { Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';

@Injectable()
export class RedisService extends Redis {
  constructor() {
    super({
      host: process.env.REDIS_HOST,
      port: Number(process.env.REDIS_PORT),
    });

    super.on('error', (err) => {
      console.log('Error on redis', err);
      process.exit(1);
    });

    super.on('connect', () => {
      console.log('Redis Connected!');
    });
  }
}
