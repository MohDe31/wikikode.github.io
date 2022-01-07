import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wikikode';

  constructor(private router: Router) {}


  about(){
    this.router.navigate(['/about']);
  }
}
