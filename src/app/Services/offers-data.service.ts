import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Offer } from '../Models/offer.model';

@Injectable({
  providedIn: 'root'
})
export class OffersDataService {
  
  offers: Offer[]=[
    new Offer("Offer1","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5M76QhFlYqQIAVosfqf7h9kD-v33JtzsBBA&usqp=CAU","detail1",true),
    new Offer("Offer2","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6DOmDJEffnpkvDHqsFM0kshV646YWtkBxaw&usqp=CAU","detail2",true),
    new Offer("Offer3","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy185YJgiUo7i98eJ9pRCD-9usZhYbvjVfZA&usqp=CAU","detail3",true),
    new Offer("Offer4","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUvCH21SqNLLKL7nyQb9LAuJe2m-CR0jXDtw&usqp=CAU","detail4",true),
    new Offer("Offer5","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS7Apxgn-hqGV--sxGnbohAoUK6A6WzHKFxw&usqp=CAU","detail5",true),
    new Offer("Offer6","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQR_iVb9TF5Fex2Tdw0YUXH2WcMfN3nwZyzw&usqp=CAU","detail6",true),
    new Offer("Offer7","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkMR0tmWSpSenXa54EohAYyyCLhCHg7T9ejw&usqp=CAU","detail7",true),
    new Offer("Offer8","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbAWGmAL0Kn-CY-8FQB_hEUx_KPh1Z1LW0g&usqp=CAU","detail8",true)
  ];

  notifyScroll= new Subject<number>();

  constructor() { }

  getOffers(): Offer[]{
    return this.offers.slice();
  }
}
