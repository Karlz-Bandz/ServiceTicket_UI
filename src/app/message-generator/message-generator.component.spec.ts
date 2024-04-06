import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageGeneratorComponent } from './message-generator.component';
import { HttpClientModule } from '@angular/common/http';

describe('MessageGeneratorComponent', () => {
  let component: MessageGeneratorComponent;
  let fixture: ComponentFixture<MessageGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MessageGeneratorComponent,
        HttpClientModule
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessageGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
