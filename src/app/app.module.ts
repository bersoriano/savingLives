/* Core Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* State management */
import { StoreModule } from '@ngrx/store';
import { slideMenuReducer } from './core/reducers/slideMenu';
/* App components */
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SectionTitleComponent } from './components/common/styled-components/section-title/section-title.component';
import { HeaderNavComponent } from './components/common/styled-components/header-nav/header-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SectionTitleComponent,
    HeaderNavComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ slideTo: slideMenuReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
