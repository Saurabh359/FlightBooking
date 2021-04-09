import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Traveler } from '../Models/travel_blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogsDataService {

  travels: Traveler[]=[
    new Traveler("Vlog1","https://img.etimg.com/thumb/msid-66129697,width-640,resizemode-4,imgsize-342241/how-to-get-your-trips-sponsored.jpg","detail1",true),
    new Traveler("Vlog2","https://s26561.pcdn.co/wp-content/uploads/2017/02/How-to-Plan-a-Trip-Travel-Planning-Tips-1200x800.jpg","detail2",true),
    new Traveler("Vlog3","https://wwwnc.cdc.gov/travel/images/during-travel-map.jpg","detail3",true),
    new Traveler("Vlog4","https://tata-cms.s3.ap-south-1.amazonaws.com/large_Myths-of-Travel-Insurance_5afaa8565c.jpeg","detail4",true),
    new Traveler("Vlog5","https://www.wendyperrin.com/wp-content/uploads/2020/02/Islas-de-Rosario-Colombia-cr-Shutterstock.jpg","detail5",true),
    new Traveler("Vlog6","https://specials-images.forbesimg.com/imageserve/5df99042e961e1000739542c/960x0.jpg?fit=scale","detail6",true),
    new Traveler("Vlog7","https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F08%2Fsolo-travel-paris-MOBILEMOONS0819.jpg","detail7",true),
    new Traveler("Vlog8","https://wwwnc.cdc.gov/travel/images/during-travel-map.jpg","detail8",true)
  ];

  notifyScroll= new Subject<number>();

  constructor() { }

  getTravelblogs(): Traveler[]{
    return this.travels.slice();
  }
}
