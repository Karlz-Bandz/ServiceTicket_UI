import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAtmComponent } from './search-atm.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SearchAtmComponent', () => {
  let component: SearchAtmComponent;
  let fixture: ComponentFixture<SearchAtmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SearchAtmComponent,
        HttpClientModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchAtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
