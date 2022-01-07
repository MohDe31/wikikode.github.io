import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {}

  toggleDarkMode(){
    const isDark = document.body.classList.contains("dark");
    
    if(isDark){
      document.body.classList.remove("dark");
      return;
    }

    document.body.classList.add("dark");
    
  }
}
