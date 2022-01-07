import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: 'home',
    redirectTo: ''
  },{
    path: '',
    component: HomeComponent
  },{
    path: 'about',
    component: AboutComponent
  },{
    path: 'article',
    loadChildren: () => import('./article/article.module').then( m => m.ArticleModule )
  },{
    path: '**',
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
