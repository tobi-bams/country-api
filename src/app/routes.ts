import { Routes } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryRouteActivatorService } from './country-route-activator.service';
import { ErrorComponent } from './error/error.component';

export const appRoutes: Routes = [
  {path: 'countries', component: CountriesComponent},
  {path: '404', component: ErrorComponent},
  {path: 'countries/:name', component: CountryDetailComponent, canActivate: [CountryRouteActivatorService]},
  {path: '', redirectTo: '/countries', pathMatch: 'full'}
]
