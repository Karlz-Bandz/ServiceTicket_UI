import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmComponent } from './atm.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('AtmComponent', () => {
  let component: AtmComponent;
  let fixture: ComponentFixture<AtmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AtmComponent,
        HttpClientModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
