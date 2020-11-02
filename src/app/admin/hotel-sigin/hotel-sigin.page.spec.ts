import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HotelSiginPage } from './hotel-sigin.page';

describe('HotelSiginPage', () => {
  let component: HotelSiginPage;
  let fixture: ComponentFixture<HotelSiginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelSiginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HotelSiginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
