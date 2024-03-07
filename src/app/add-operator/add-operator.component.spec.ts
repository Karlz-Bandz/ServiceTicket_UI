import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOperatorComponent } from './add-operator.component';
import { HttpClientModule } from '@angular/common/http';

describe('AddOperatorComponent', () => {
  let component: AddOperatorComponent;
  let fixture: ComponentFixture<AddOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AddOperatorComponent,
        HttpClientModule
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
