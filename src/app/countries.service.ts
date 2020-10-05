import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

private url = "https://restcountries.eu/rest/v2/all";
private countryUrl = "https://restcountries.eu/rest/v2/alpha/";
  constructor(private http: HttpClient, private router: Router) { }

  getcountries(){
    return this.http.get(this.url);
  }

  getCountry(name: string){
    return this.http.get(`${this.countryUrl}${name}`).pipe(catchError(this.handleError('getCountry')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.router.navigate(['/404']);
      // console.error(error);
      return of(result as T);
    }
  }
}
