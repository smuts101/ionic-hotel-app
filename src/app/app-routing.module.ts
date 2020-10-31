import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'booking',
    loadChildren: () => import('./booking/booking.module').then( m => m.BookingPageModule)
  },
  {
    path: 'booking-history',
    loadChildren: () => import('./booking-history/booking-history.module').then( m => m.BookingHistoryPageModule)
  },
  {
    path: 'choose-account',
    loadChildren: () => import('./choose-account/choose-account.module').then( m => m.ChooseAccountPageModule)
  },
  {
    path: 'current-booking',
    loadChildren: () => import('./current-booking/current-booking.module').then( m => m.CurrentBookingPageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'gallaries',
    loadChildren: () => import('./gallaries/gallaries.module').then( m => m.GallariesPageModule)
  },
  {
    path: 'hotel-profile',
    loadChildren: () => import('./hotel-profile/hotel-profile.module').then( m => m.HotelProfilePageModule)
  },
  {
    path: 'list-hotel',
    loadChildren: () => import('./list-hotel/list-hotel.module').then( m => m.ListHotelPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'user-panel',
    loadChildren: () => import('./user-panel/user-panel.module').then( m => m.UserPanelPageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
