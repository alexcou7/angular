import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerPresenterComponent } from './viewer-presenter.component';

describe('ViewerPresenterComponent', () => {
  let component: ViewerPresenterComponent;
  let fixture: ComponentFixture<ViewerPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewerPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
