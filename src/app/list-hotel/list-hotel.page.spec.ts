import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListHotelPage } from './list-hotel.page';

describe('ListHotelPage', () => {
  let component: ListHotelPage;
  let fixture: ComponentFixture<ListHotelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListHotelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListHotelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
