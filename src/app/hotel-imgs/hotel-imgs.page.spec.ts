import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HotelImgsPage } from './hotel-imgs.page';

describe('HotelImgsPage', () => {
  let component: HotelImgsPage;
  let fixture: ComponentFixture<HotelImgsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelImgsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HotelImgsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
