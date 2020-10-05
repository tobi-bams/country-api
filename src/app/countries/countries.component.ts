import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { Country } from '../country';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countries;
  _searchCountry: string ;
  filteredCountry;
  result;
  _sortCountry: string = "all";


  get searchCountry(): string{
    return this._searchCountry;
  }

  set searchCountry(value: string){
    this._searchCountry = value;
    this.filteredCountry = this.searchCountry ? this.performFilter(this._searchCountry) : this.countries;
  }

  performFilter(filterBy: string){
    filterBy = filterBy.toLocaleLowerCase();
    this.result = this.countries.filter((country) => {
      return country.name.toLocaleLowerCase().includes(filterBy);
    })
    return this.result
  }

  get sortCountry(){
    return this._sortCountry
  }

  set sortCountry(value: string){
    this._sortCountry = value;
    this.filteredCountry = this.sortCountry ? this.performSortCountry(this._sortCountry) : this.countries;
  }

  performSortCountry(sortBy){

    if(sortBy === "all"){
      this.result = this.countries;
      return this.result;
    }else{
    this.result = this.countries.filter((country) => {
      return country.region.toLocaleLowerCase() === sortBy;
    })
    return this.result;
  }
  }

  constructor(private coutriesService: CountriesService) {
  }

  ngOnInit() {
    this.coutriesService.getcountries().subscribe(response => {this.countries = response;
      this.filteredCountry = this.countries;})
  }

}
