import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from '../hotel.service';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
   formData:any;
   hotelid = this.route.snapshot.params.hotelid;
   
  

  constructor(private route:ActivatedRoute,public hotelService:HotelService) {

    this.formData = {
      checkin:'',
      checkout:'',
      kids:'',
      adults:'',
      rooms:'',
  
      bankName:'',
      cardno:'',
      month:'',
      year:'',
      vcc:''
    };



   }
  

  bookingDetails(){
     
      this.hotelService.booking(this.formData.checkin,
                                this.formData.checkout,
                                this.formData.kids,
                                this.formData.adults,
                                this.formData.rooms,
                                this.hotelid,
                                this.hotelService.getUserSession(),
                                this.hotelService.getUserSessionUid()
                               ,this.formData.bankName,
                                this.formData.cardno,
                                this.formData.month,
                                this.formData.year,
                                this.formData.vcc,
                                this.hotelService.getTimes(), 
                                this.hotelService.getDates()
                               );
      }


  ngOnInit() {
  }
  async signOut(){
    this.hotelService.signOut();
  }

}
