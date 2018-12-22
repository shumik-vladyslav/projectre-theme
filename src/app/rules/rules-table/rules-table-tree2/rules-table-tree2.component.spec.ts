import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesTableTree2Component } from './rules-table-tree2.component';

describe('RulesTableTree2Component', () => {
  let component: RulesTableTree2Component;
  let fixture: ComponentFixture<RulesTableTree2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesTableTree2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesTableTree2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
