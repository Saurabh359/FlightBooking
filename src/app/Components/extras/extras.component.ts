import { Component, OnInit } from '@angular/core';
import { BlogsDataService } from 'src/app/Services/blogs-data.service';
import { OffersDataService } from 'src/app/Services/offers-data.service';

@Component({
  selector: 'app-extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.css']
})
export class ExtrasComponent implements OnInit {

  constructor( private offerService: OffersDataService,
               private travelService: BlogsDataService) { }

  ngOnInit(): void {
  }

  Scroll(temp: number){
    this.offerService.notifyScroll.next(temp);
  }

  Scroll2(temp: number){
    this.travelService.notifyScroll.next(temp);
  }

}
