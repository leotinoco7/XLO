import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus(baseUrl: string) {
    return {
      status: 'Top trump is running! 🚀',
      docs: baseUrl + '/api',
    };
  }
}
