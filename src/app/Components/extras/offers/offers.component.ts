import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Offer } from 'src/app/Models/offer.model';
import { OffersDataService } from 'src/app/Services/offers-data.service';
import { ExtrasComponent } from '../extras.component';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit{

  offerslist: Offer[];

  @ViewChild('body') body: ElementRef;

  constructor(private offerService: OffersDataService) { }

  ngOnInit(): void {

    this.offerslist=this.offerService.getOffers();

    this.offerService.notifyScroll.subscribe(d=>{
      this.Scroll(d);
    })
  }

  Scroll(temp: number): void{
    let result: number=0;

    if(temp==1){ result=100; }
    else if(temp == 0){ result=-100; }

    this.body.nativeElement.scrollLeft +=result;
  }

}
