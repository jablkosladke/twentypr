import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsugarComponent } from './showsugar.component';

describe('ShowsugarComponent', () => {
  let component: ShowsugarComponent;
  let fixture: ComponentFixture<ShowsugarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowsugarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowsugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
