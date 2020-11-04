import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  email = this.route.snapshot.params.email;
  checkin:any="";
  checkout:any="";
  kids:any="";
  adults:any="";
  rooms:any="";
  constructor(private route:ActivatedRoute,public hotelService:HotelService) { }


  bookingDetails(){
    this.hotelService.booking(this.checkin,this.checkout,this.kids,this.adults,this.rooms,this.email);
  }


  ngOnInit() {
  }

}
