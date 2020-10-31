import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserPanelPage } from './user-panel.page';

describe('UserPanelPage', () => {
  let component: UserPanelPage;
  let fixture: ComponentFixture<UserPanelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPanelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserPanelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
