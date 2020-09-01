import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageSkillItemComponent } from './language-skill-item.component';

describe('LanguageSkillItemComponent', () => {
  let component: LanguageSkillItemComponent;
  let fixture: ComponentFixture<LanguageSkillItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageSkillItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageSkillItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
