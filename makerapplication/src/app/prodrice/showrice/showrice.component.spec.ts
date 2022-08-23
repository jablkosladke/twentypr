import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowriceComponent } from './showrice.component';

describe('ShowriceComponent', () => {
  let component: ShowriceComponent;
  let fixture: ComponentFixture<ShowriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
