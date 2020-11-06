import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.page.html',
  styleUrls: ['./user-panel.page.scss'],
})
export class UserPanelPage implements OnInit {

  constructor(private router:Router,public hotelService:HotelService) { }

  ngOnInit() {
  }
  async signOut(){
    this.hotelService.signOut();
  }

}
