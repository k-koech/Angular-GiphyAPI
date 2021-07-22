import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit, OnDestroy
{
    gifs:any[]=[];
    subscription: Subscription = new Subscription;

  constructor( private dataService:DataService) 
  { }

  ngOnInit(): void  
  {
    this.dataService.getTrendingGifs();
    //  .subscribe(
    //   (response: any) => {
    //     this.gifs = response.data;
    //     console.log(response);
    //   });
    this.subscription =  this.dataService.getGifs()
    .subscribe((response: any) => {
          this.gifs = response;
          console.log(response);
        });
    }

    ngOnDestroy()
    {
       this.subscription.unsubscribe();
    }

}
