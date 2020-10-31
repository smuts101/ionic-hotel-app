import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CurrentBookingPage } from './current-booking.page';

describe('CurrentBookingPage', () => {
  let component: CurrentBookingPage;
  let fixture: ComponentFixture<CurrentBookingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentBookingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentBookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
