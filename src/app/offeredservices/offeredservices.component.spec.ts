import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferedservicesComponent } from './offeredservices.component';

describe('OfferedservicesComponent', () => {
  let component: OfferedservicesComponent;
  let fixture: ComponentFixture<OfferedservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferedservicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferedservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
