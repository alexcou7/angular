import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPresenterComponent } from './new-presenter.component';

describe('NewPresenterComponent', () => {
  let component: NewPresenterComponent;
  let fixture: ComponentFixture<NewPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
