import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HotelSignupPage } from './hotel-signup.page';

describe('HotelSignupPage', () => {
  let component: HotelSignupPage;
  let fixture: ComponentFixture<HotelSignupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelSignupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HotelSignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
