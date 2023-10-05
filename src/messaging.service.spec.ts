import {describe, expect, beforeEach, it} from '@jest/globals';
import { MessagingService } from './messaging.service';

describe('MessagingService', () => {
  let service: MessagingService;

  beforeEach(async () => {
    service = new MessagingService();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
