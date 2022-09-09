import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurpriseMeComponent } from './surprise-me.component';

describe('SurpriseMeComponent', () => {
  let component: SurpriseMeComponent;
  let fixture: ComponentFixture<SurpriseMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurpriseMeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurpriseMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
