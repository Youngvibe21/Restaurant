import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdimItemComponent } from './adim-item.component';

describe('AdimItemComponent', () => {
  let component: AdimItemComponent;
  let fixture: ComponentFixture<AdimItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdimItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdimItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
