import { TestBed } from '@angular/core/testing';

import { AddAtmService } from './add-atm.service';
import { HttpClientModule } from '@angular/common/http';

describe('AddAtmService', () => {
  let service: AddAtmService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ]
    });
    service = TestBed.inject(AddAtmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
