import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherplaceComponent } from './otherplace.component';

describe('OtherplaceComponent', () => {
  let component: OtherplaceComponent;
  let fixture: ComponentFixture<OtherplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
