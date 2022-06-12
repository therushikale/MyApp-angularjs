import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmptsComponent } from './cmpts.component';

describe('CmptsComponent', () => {
  let component: CmptsComponent;
  let fixture: ComponentFixture<CmptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmptsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
