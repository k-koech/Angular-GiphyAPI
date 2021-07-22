import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-search-giphy',
  templateUrl: './search-giphy.component.html',
  styleUrls: ['./search-giphy.component.css']
})
export class SearchGiphyComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  search(searchTerm: string)
  {
    if(searchTerm !== "")
    {
      this.dataService.searchGifs(searchTerm);
      
      // .subscribe(
      //   (response: any) => {
      //     console.log(response);
      //   });
    }
  }

}
