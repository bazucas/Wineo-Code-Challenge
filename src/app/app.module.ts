import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { InsertPageComponent } from './components/insert-page/insert-page.component';
import { ListPageComponent } from './components/list-page/list-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DetailPageComponent } from './components/detail-page/detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    InsertPageComponent,
    ListPageComponent,
    PageNotFoundComponent,
    DetailPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
