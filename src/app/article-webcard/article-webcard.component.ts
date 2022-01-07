import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'article-webcard',
  templateUrl: './article-webcard.component.html',
  styleUrls: ['./article-webcard.component.scss']
})
export class ArticleWebcardComponent implements OnInit {

  @Input() type: string;
  @Input() title: string;
  @Input() imgsrc: string;
  @Input() dataurl: string | undefined;
  //@Input() date: string;

  constructor(private router: Router) {
    this.title  = "";
    this.type   = "";
    this.imgsrc = "";
    this.dataurl= undefined;
    //this.date  = (new Date()).toDateString();
  }

  navigate() {
    if(this.dataurl){
      this.router.navigate([this.dataurl]);
    }
  }

  ngOnInit(): void {
  }

}
