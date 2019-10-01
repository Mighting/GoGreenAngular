import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmCreateComponent } from './mm-create.component';

describe('MmCreateComponent', () => {
  let component: MmCreateComponent;
  let fixture: ComponentFixture<MmCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
