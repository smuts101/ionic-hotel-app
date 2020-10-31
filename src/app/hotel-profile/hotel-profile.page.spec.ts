import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HotelProfilePage } from './hotel-profile.page';

describe('HotelProfilePage', () => {
  let component: HotelProfilePage;
  let fixture: ComponentFixture<HotelProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HotelProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
