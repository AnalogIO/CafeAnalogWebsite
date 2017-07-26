import { TestBed, inject } from '@angular/core/testing';

import { BaristaService } from './barista.service';

describe('BaristaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaristaService]
    });
  });

  it('should be created', inject([BaristaService], (service: BaristaService) => {
    expect(service).toBeTruthy();
  }));
});
