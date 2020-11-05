import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImageGallaryPage } from './image-gallary.page';

describe('ImageGallaryPage', () => {
  let component: ImageGallaryPage;
  let fixture: ComponentFixture<ImageGallaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageGallaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImageGallaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
