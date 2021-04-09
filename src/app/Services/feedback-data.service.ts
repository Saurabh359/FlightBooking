import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedbackDataService {

  constructor(private http: HttpClient) {
   }

  Senddata(data: string){
  
    this.http.post('http://127.0.0.1:3000', data).subscribe()

  }

  Recievedata(){
    // let head = new HttpHeaders().set("Content-Type", "application/json");

    // console.log(head.get("Access-Control-Allow-Origin"));

    return this.http.get('https://localhost:44349/api/flight');
  }

  bestfeed(): string[]{
    return [" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis explicabo voluptas vero aliquid optio delectus non fugit",
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis explicabo voluptas vero aliquid optio delectus non fugit",
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis explicabo voluptas vero aliquid optio delectus non fugit",
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis explicabo voluptas vero aliquid optio delectus non fugit",
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis explicabo voluptas vero aliquid optio delectus non fugit",
    ];
  }
}

