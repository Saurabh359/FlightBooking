import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Feedback } from 'src/app/Models/feedback.model';
import { Ticket } from 'src/app/Models/ticket.model';
import { FeedbackDataService } from 'src/app/Services/feedback-data.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  providers: [FeedbackDataService]
})
export class FeedbackComponent implements OnInit {

  result: string[]=[];
  bestFeedback: string[]=[];
  feedbacks: Feedback[]=[];
  currDate= new Date();
  bookings: Ticket[]=[];

  glow: number =-1;
  @ViewChild('rating') ratingele: ElementRef;

  constructor(private feedService: FeedbackDataService) { }

  ngOnInit(): void {
    this.bestFeedback= this.feedService.bestfeed();
    this.ShowData();
  }

  Submit(data: string){
    this.feedService.Senddata(data);
  }

  ShowData(){
    // this.feedService.Recievedata().subscribe( (res: Ticket[]) =>{
    //    console.log(res);
    //    console.log(res.constructor.name)
    //    console.log("*******************************")
    //    console.log(JSON.stringify(res)); 
    // })
    let temp: Feedback=new Feedback("saurabh mehra","https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png","hello everyone this is faboulous app", 5, this.currDate);
    this.feedbacks.push(temp);
    this.feedbacks.push(temp);
    this.feedbacks.push(temp);
  }

  rateIn(val:number){  
    for(let i=0;i<5;i++) {
          if(i<val) this.ratingele.nativeElement.children[i].style="color: yellowgreen";
          else this.ratingele.nativeElement.children[i].style="color: white";
      }
  }
  rateOut(){
    for(let i=0;i<5;i++) {
      if(i<this.glow) this.ratingele.nativeElement.children[i].style="color: yellowgreen";
      else this.ratingele.nativeElement.children[i].style="color: white";
  }
  }
}
