import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncharchComponent } from './incharch.component';

describe('IncharchComponent', () => {
  let component: IncharchComponent;
  let fixture: ComponentFixture<IncharchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncharchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncharchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
