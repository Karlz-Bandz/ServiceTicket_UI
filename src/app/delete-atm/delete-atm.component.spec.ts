import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAtmComponent } from './delete-atm.component';
import { HttpClientModule } from '@angular/common/http';

describe('DeleteAtmComponent', () => {
  
  let component: DeleteAtmComponent;
  let fixture: ComponentFixture<DeleteAtmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DeleteAtmComponent,
        HttpClientModule
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteAtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
