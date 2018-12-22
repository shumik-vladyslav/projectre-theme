import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRulesComponent } from './header-rules.component';

describe('HeaderRulesComponent', () => {
  let component: HeaderRulesComponent;
  let fixture: ComponentFixture<HeaderRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
