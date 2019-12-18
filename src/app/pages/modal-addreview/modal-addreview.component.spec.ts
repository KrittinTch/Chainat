import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddreviewComponent } from './modal-addreview.component';

describe('ModalAddreviewComponent', () => {
  let component: ModalAddreviewComponent;
  let fixture: ComponentFixture<ModalAddreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
