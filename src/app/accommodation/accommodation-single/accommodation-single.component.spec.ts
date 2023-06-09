import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationSingleComponent } from './accommodation-single.component';

describe('AccommodationSingleComponent', () => {
  let component: AccommodationSingleComponent;
  let fixture: ComponentFixture<AccommodationSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccommodationSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccommodationSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
