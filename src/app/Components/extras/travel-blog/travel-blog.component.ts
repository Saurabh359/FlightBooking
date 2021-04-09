import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Traveler } from 'src/app/Models/travel_blog.model';
import { BlogsDataService } from 'src/app/Services/blogs-data.service';

@Component({
  selector: 'app-travel-blog',
  templateUrl: './travel-blog.component.html',
  styleUrls: ['./travel-blog.component.css']
})
export class TravelBlogComponent implements OnInit {

  
  travelbloglist: Traveler[];

  @ViewChild('body') body: ElementRef;

  constructor(private blogService: BlogsDataService) { }

  ngOnInit(): void {

    this.travelbloglist=this.blogService.getTravelblogs();

    this.blogService.notifyScroll.subscribe(d=>{
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
