import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WHOAREWE1Component } from './whoarewe1.component';

describe('WHOAREWE1Component', () => {
  let component: WHOAREWE1Component;
  let fixture: ComponentFixture<WHOAREWE1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WHOAREWE1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WHOAREWE1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
