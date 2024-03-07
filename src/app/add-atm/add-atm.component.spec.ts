import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAtmComponent } from './add-atm.component';
import { HttpClientModule } from '@angular/common/http';

describe('AddAtmComponent', () => {
  let component: AddAtmComponent;
  let fixture: ComponentFixture<AddAtmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AddAtmComponent,
        HttpClientModule
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddAtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
