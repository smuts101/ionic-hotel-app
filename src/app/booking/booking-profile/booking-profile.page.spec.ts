import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookingProfilePage } from './booking-profile.page';

describe('BookingProfilePage', () => {
  let component: BookingProfilePage;
  let fixture: ComponentFixture<BookingProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookingProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
