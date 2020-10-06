import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CountriesComponent } from './countries/countries.component';
import { HttpClientModule} from '@angular/common/http';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { appRoutes } from './routes'
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CountriesComponent,
    CountryDetailComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
