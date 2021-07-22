import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GiphyComponent } from './giphy/giphy.component';
import { TrendingGiphyComponent } from './trending-giphy/trending-giphy.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchGiphyComponent } from './search-giphy/search-giphy.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    GiphyComponent,
    TrendingGiphyComponent,
    SearchGiphyComponent,
    NavComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
