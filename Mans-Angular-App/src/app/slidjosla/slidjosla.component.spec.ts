import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidjoslaComponent } from './slidjosla.component';

describe('SlidjoslaComponent', () => {
  let component: SlidjoslaComponent;
  let fixture: ComponentFixture<SlidjoslaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidjoslaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidjoslaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
