import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  hotelid = this.route.snapshot.params.hotelid;
  checkin:any="";
  checkout:any="";
  kids:any="";
  adults:any="";
  rooms:any="";
  
  bankName:any;
  cardno:any;
  month:any;
  year:any;
  vcc:any;
  
  constructor(private route:ActivatedRoute,public hotelService:HotelService) { }


  bookingDetails(){
    console.log(this.hotelService.getUserSession());
    this.hotelService.booking(this.checkin,this.checkout,this.kids,this.adults,
                              this.rooms,this.hotelid,this.hotelService.getUserSession()
                              ,this.bankName,this.cardno,this.month,this.year,this.vcc
                              );
  }


  ngOnInit() {
  }
  async signOut(){
    this.hotelService.signOut();
  }

}
