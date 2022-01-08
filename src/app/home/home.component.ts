import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public articleService: ArticleService) { }

  ngOnInit(): void {
  }

}
