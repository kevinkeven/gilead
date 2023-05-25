import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItinerariesSingleComponent } from './itineraries-single.component';

describe('ItinerariesSingleComponent', () => {
  let component: ItinerariesSingleComponent;
  let fixture: ComponentFixture<ItinerariesSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItinerariesSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItinerariesSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
