import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourDetailComponent } from './your-detail.component';

describe('YourDetailComponent', () => {
  let component: YourDetailComponent;
  let fixture: ComponentFixture<YourDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
