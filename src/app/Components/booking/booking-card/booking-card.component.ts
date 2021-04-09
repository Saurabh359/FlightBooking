import { formatDate } from '@angular/common';
import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';
@Component({
  selector: 'app-booking-card',
  templateUrl: './booking-card.component.html',
  styleUrls: ['./booking-card.component.css']
})
export class BookingCardComponent implements OnInit, AfterContentChecked {

  startDate = formatDate(new Date(Date.now()), 'yyyy-MM-dd', 'en')

  bookingForm: FormGroup;
  pncdata: string;
  returnconfirm: boolean = false;

  constructor() { }

  ngAfterContentChecked(){  
    this.pncdata= this.bookingForm.get('passengers').value +" Passengers, "+ this.bookingForm.get('class').value +" Class";

    if(this.f.triptype.value == 'one-way')
      {
        this.bookingForm.patchValue({ 'returningDate': null });
        this.bookingForm.get('returningDate').disable();
        this.returnconfirm= false; 
      }
    else
      {
        if(!this.returnconfirm) 
          this.bookingForm.patchValue({ 'returningDate': this.f.departureDate.value });

        this.bookingForm.get('returningDate').enable();
        this.returnconfirm=true;
      }

  }

  ngOnInit(): void {

    this.bookingForm= new FormGroup({
      'starting':new FormControl(null, Validators.required),
      'destination':new FormControl(null, Validators.required),
      'triptype': new FormControl("one-way", Validators.required),
      'departureDate': new FormControl(this.startDate, Validators.required),
      'returningDate': new FormControl(null, Validators.required),
      'passengers' : new FormControl(1,Validators.required),
      'class': new FormControl("Economy",Validators.required)
    });
//{value: 'Nancy', disabled: true}

    $(function(){
      $('.popup').click(function(){
        $('.input-box2').toggle();
      })
    })
  
  }

  get f(){ return this.bookingForm.controls; }

  onSubmit(){
    if(this.bookingForm.valid){
      alert("Flight Booked ");
    }
  }

}
