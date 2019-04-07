import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PanelModule} from 'primeng/panel';
import {RouterModule} from '@angular/router';
import {ButtonModule} from 'primeng/button';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {
  CheckboxModule,
  DialogModule, InputTextModule,
  PaginatorModule, RadioButtonModule, RatingModule,
  TabViewModule
} from 'primeng/primeng';
import {DataViewModule} from 'primeng/dataview';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CommonModule} from '@angular/common';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { InsertPageComponent } from './components/insert-page/insert-page.component';
import { ListPageComponent } from './components/list-page/list-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DetailPageComponent } from './components/detail-page/detail-page.component';
import {appRoutes} from './app-routes';

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
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    PanelModule,
    ReactiveFormsModule,
    HttpClientModule,
    CollapseModule,
    PaginatorModule,
    DataViewModule,
    DialogModule,
    ScrollingModule,
    CheckboxModule,
    CommonModule,
    ButtonModule,
    TabViewModule,
    RadioButtonModule,
    InputTextModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
