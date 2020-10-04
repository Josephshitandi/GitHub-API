import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRepoComponent } from './home-repo.component';

describe('HomeRepoComponent', () => {
  let component: HomeRepoComponent;
  let fixture: ComponentFixture<HomeRepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRepoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
