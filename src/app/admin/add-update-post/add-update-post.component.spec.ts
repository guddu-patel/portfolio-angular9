import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdatePostComponent } from './add-update-post.component';

describe('AddUpdatePostComponent', () => {
  let component: AddUpdatePostComponent;
  let fixture: ComponentFixture<AddUpdatePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUpdatePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
