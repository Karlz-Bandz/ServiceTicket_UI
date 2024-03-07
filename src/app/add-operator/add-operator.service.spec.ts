import { TestBed } from '@angular/core/testing';

import { AddOperatorService } from './add-operator.service';
import { HttpClientModule } from '@angular/common/http';

describe('AddOperatorService', () => {
  let service: AddOperatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(AddOperatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
