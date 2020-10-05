import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { CountriesService } from './countries.service';

@Injectable({
  providedIn: 'root'
})
export class CountryRouteActivatorService implements CanActivate{

  constructor(private countryService: CountriesService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {

    const countryExists = !!this.countryService.getCountry(route.params['name']);

    if(!countryExists){
      this.router.navigate(['/countries']);
    }

    else {
      return countryExists;

    }
  }
}
