import { SearchService } from './search.service';
import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CDN LIBRARY SEARCH';
  results: Object;
  searchTerm$ = new Subject<string>();
  
  constructor(private ss: SearchService){
    this.ss.search(this.searchTerm$)
    .subscribe(results => {
      this.results = results.results;
    });
  }
}
