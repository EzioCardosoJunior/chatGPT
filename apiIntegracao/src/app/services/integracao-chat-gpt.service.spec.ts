import { TestBed } from '@angular/core/testing';

import { IntegracaoChatGptService } from './integracao-chat-gpt.service';

describe('IntegracaoChatGptService', () => {
  let service: IntegracaoChatGptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntegracaoChatGptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
