import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HotelDetailsPage } from './hotel-details.page';

describe('HotelDetailsPage', () => {
  let component: HotelDetailsPage;
  let fixture: ComponentFixture<HotelDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HotelDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
