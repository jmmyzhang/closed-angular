import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosetView } from './closet-view';

describe('Closet', () => {
  let component: ClosetView;
  let fixture: ComponentFixture<ClosetView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClosetView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClosetView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
