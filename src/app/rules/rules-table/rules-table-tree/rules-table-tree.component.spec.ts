import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesTableTreeComponent } from './rules-table-tree.component';

describe('RulesTableTreeComponent', () => {
  let component: RulesTableTreeComponent;
  let fixture: ComponentFixture<RulesTableTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesTableTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesTableTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
