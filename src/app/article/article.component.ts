import { AfterViewInit, Component, ComponentFactoryResolver, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements AfterViewInit {
  @ViewChild('articleContainer', { read: ViewContainerRef }) entry: ViewContainerRef | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private resolver: ComponentFactoryResolver,
    private articleService: ArticleService) {}

  
  ngAfterViewInit(): void {
    const id: string = this.activatedRoute.snapshot.params['id'];

    if(!this.entry){return;}

    let article: Type<unknown> | undefined = this.articleService.getArticleFromID(id);

    if(article === undefined){
      article = PagenotfoundComponent;
    }

    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(article);
    this.entry.createComponent(factory);
  }
}
