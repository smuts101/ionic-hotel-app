import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  paymentArray:any=[]
  email = this.route.snapshot.params.email;
  bankName:any;
  cardno:any;
  month:any;
  year:any;
  vcc:any;
  constructor(private route:ActivatedRoute,public hotelService:HotelService) {  
     console.log(this.hotelService.getUserSession())

     this.hotelService.checkIfBooked(this.hotelService.getUserSession())
     //console.log(this.paymentArray) 

    }
 
  ngOnInit() {
  }
  payment(){
   this.hotelService.payment(this.bankName,this.cardno,this.month,this.year,this.vcc,this.hotelService.returnTemp())
  }
}
