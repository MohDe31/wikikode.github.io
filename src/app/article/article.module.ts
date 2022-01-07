import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AStarAlgorithmComponent } from '../a-star-algorithm/a-star-algorithm.component';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';

@NgModule({
  declarations: [
    ArticleComponent,
    AStarAlgorithmComponent
  ],
  imports: [
    ArticleRoutingModule
  ],
  providers: [],
  bootstrap: [ArticleComponent]
})
export class ArticleModule { }
