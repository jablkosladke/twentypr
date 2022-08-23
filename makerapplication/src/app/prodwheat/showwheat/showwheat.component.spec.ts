import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowwheatComponent } from './showwheat.component';

describe('ShowwheatComponent', () => {
  let component: ShowwheatComponent;
  let fixture: ComponentFixture<ShowwheatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowwheatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowwheatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
