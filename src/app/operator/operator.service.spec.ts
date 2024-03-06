import { TestBed } from '@angular/core/testing';

import { OperatorService } from './operator.service';
import { HttpClientModule } from '@angular/common/http';

describe('OperatorService', () => {
  let service: OperatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(OperatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
