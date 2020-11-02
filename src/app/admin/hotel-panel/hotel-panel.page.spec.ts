import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HotelPanelPage } from './hotel-panel.page';

describe('HotelPanelPage', () => {
  let component: HotelPanelPage;
  let fixture: ComponentFixture<HotelPanelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelPanelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HotelPanelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
