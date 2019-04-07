import {Routes} from '@angular/router';
import {DetailPageComponent} from './components/detail-page/detail-page.component';
import {InsertPageComponent} from './components/insert-page/insert-page.component';
import {HomeComponent} from './components/home/home.component';
import {ListPageComponent} from './components/list-page/list-page.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';

export const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'insert', component: InsertPageComponent},
  {path: 'detail', component: DetailPageComponent},
  {path: 'list', component: ListPageComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];
