import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInfoItemComponent } from './contact-info-item.component';

describe('ContactInfoItemComponent', () => {
  let component: ContactInfoItemComponent;
  let fixture: ComponentFixture<ContactInfoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactInfoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactInfoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
