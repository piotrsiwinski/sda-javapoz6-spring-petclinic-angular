import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurpetsComponent } from './ourpets.component';

describe('OurpetsComponent', () => {
  let component: OurpetsComponent;
  let fixture: ComponentFixture<OurpetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurpetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurpetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
