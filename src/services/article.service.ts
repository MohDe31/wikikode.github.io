import { Injectable, Type } from '@angular/core';
import { AStarAlgorithmComponent } from 'src/app/a-star-algorithm/a-star-algorithm.component';
import { Article } from 'src/interfaces/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private articles_: Map<string, Article>;

  constructor() {
    this.articles_ = new Map<string, Article>();

    this.articles_.set('a-star-algorithm', {
      link: 'a-star-algorithm',
      title: 'A* Algorithm',
      type: 'Path Finding',
      image: 'https://www.redblobgames.com/thumbnail/line-drawing.png',
      component: AStarAlgorithmComponent
    });

    this.articles_.set('terrain-generation', {
      link: 'terrain-generation',
      title: 'Terrain generation using random noise',
      type: 'Procedural Generation',
      image: 'https://www.redblobgames.com/thumbnail/line-drawing.png',
      component: AStarAlgorithmComponent
    });
  }

  getAllArticles(): Array<Article> {
    return Array.from(this.articles_.values());
  }

  getArticleFromID(id: string): Type<unknown> | undefined {
    return this.articles_.get(id)?.component;
  }

}
