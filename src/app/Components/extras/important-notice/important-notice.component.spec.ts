import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantNoticeComponent } from './important-notice.component';

describe('ImportantNoticeComponent', () => {
  let component: ImportantNoticeComponent;
  let fixture: ComponentFixture<ImportantNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportantNoticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportantNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
