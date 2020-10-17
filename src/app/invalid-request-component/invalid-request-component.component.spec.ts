import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidRequestComponentComponent } from './invalid-request-component.component';

describe('InvalidRequestComponentComponent', () => {
  let component: InvalidRequestComponentComponent;
  let fixture: ComponentFixture<InvalidRequestComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvalidRequestComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidRequestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
