import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { NavComponent } from './components/movies-list/nav/nav.component';
import { MoviesComponent } from './components/movies-list/movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MovieListService } from './services/movie-list.service';
import { FormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MoviesListComponent,
    NavComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    MatAutocompleteModule
  ],
  providers: [MovieListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
