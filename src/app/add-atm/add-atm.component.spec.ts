import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAtmComponent } from './add-atm.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

describe('AddAtmComponent', () => {
  let component: AddAtmComponent;
  let fixture: ComponentFixture<AddAtmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AddAtmComponent,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterTestingModule
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
