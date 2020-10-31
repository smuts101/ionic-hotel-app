import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GallariesPage } from './gallaries.page';

describe('GallariesPage', () => {
  let component: GallariesPage;
  let fixture: ComponentFixture<GallariesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallariesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GallariesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
