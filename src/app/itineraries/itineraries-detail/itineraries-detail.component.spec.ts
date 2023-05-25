import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItinerariesDetailComponent } from './itineraries-detail.component';

describe('ItinerariesDetailComponent', () => {
  let component: ItinerariesDetailComponent;
  let fixture: ComponentFixture<ItinerariesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItinerariesDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItinerariesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
