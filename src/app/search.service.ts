import { Injectable } from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class SearchService {
  baseUrl: string = 'https://api.cdnjs.com/libraries';
  queryUrl: string = '?search=';

  constructor(private http: Http){}


  search(terms: Observable<string>){
    return terms.debounceTime(400) // every x seconds data can pass through 
    .distinctUntilChanged() // allows distince data to pass through
    .switchMap(term => 
      this.searchEntries(term)
    ) //switchMap() combine observable data into one

    
  }

  searchEntries(term){
    return this.http
    .get(this.baseUrl + this.queryUrl + term)
    .map(res => res.json());
  }
}

