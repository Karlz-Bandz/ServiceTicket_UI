import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteOperatorComponent } from './delete-operator.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DeleteOperatorComponent', () => {
  let component: DeleteOperatorComponent;
  let fixture: ComponentFixture<DeleteOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DeleteOperatorComponent,
        HttpClientModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ]
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
