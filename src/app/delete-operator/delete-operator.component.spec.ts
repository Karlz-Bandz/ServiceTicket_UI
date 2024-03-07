import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteOperatorComponent } from './delete-operator.component';

describe('DeleteOperatorComponent', () => {
  let component: DeleteOperatorComponent;
  let fixture: ComponentFixture<DeleteOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteOperatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
