import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  promisevalue=1;
  observervalue=1;

  constructor() { }

  ngOnInit(): void {
  }

  customPromise= new Promise((resolve,reject)=>{
    let a=1;
    setInterval(()=>{a++; resolve(a)},5000);
  })

  customObservable=new Observable((observer)=>{
    let b=1;
    setInterval(()=>{b++; observer.next(b)},1000);
  })

  obs=this.customObservable.subscribe((d: number)=>{
    this.observervalue=d;
  })

  pro=this.customPromise.then((d:number)=>{
    this.promisevalue=d;
  })


}
