import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  countries;
  country
  name;
  languageName = [];
  language: string;
  borders = [];
  constructor(private countriesService: CountriesService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.countriesService.getCountry(params['name']).subscribe(response => {
        this.country = response;
        this.languageName = [];
        this.country.languages.forEach((language) => {
          this.languageName.push(language.name);
        })
        this.language = this.languageName.join(", ");
          this.borders = [];
          this.country.borders.forEach((border) => {
            this.countriesService.getcountries().subscribe((response) => {
              this.countries = response;
              this.countries.filter((country) => {
                if(country.alpha3Code === border){
                  this.borders.push({name: country.name, code: country.alpha3Code});
                }
              })

            })
          })
      })
    })
  }

}
