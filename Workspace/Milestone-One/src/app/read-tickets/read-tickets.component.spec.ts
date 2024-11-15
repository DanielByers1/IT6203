import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadTicketsComponent } from './read-tickets.component';

describe('ReadTicketsComponent', () => {
  let component: ReadTicketsComponent;
  let fixture: ComponentFixture<ReadTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadTicketsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
