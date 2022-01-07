import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleWebcardComponent } from './article-webcard.component';

describe('ArticleWebcardComponent', () => {
  let component: ArticleWebcardComponent;
  let fixture: ComponentFixture<ArticleWebcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleWebcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleWebcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
