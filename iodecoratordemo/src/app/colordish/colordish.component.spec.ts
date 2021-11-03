import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColordishComponent } from './colordish.component';

describe('ColordishComponent', () => {
  let component: ColordishComponent;
  let fixture: ComponentFixture<ColordishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColordishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColordishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
