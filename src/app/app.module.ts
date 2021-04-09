import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { BannerComponent } from './Components/banner/banner.component';
import { BookingComponent } from './Components/booking/booking.component';
import { ExtrasComponent } from './Components/extras/extras.component';
import { FeaturesComponent } from './Components/features/features.component';
import { FeedbackComponent } from './Components/feedback/feedback.component';
import { BookingCardComponent } from './Components/booking/booking-card/booking-card.component';
import { BookingDetailsComponent } from './Components/booking/booking-details/booking-details.component';
import { BookingInfoComponent } from './Components/booking/booking-info/booking-info.component';
import { ImportantNoticeComponent } from './Components/extras/important-notice/important-notice.component';
import { OffersComponent } from './Components/extras/offers/offers.component';
import { TravelBlogComponent } from './Components/extras/travel-blog/travel-blog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './Components/main/main.component';
import {HttpClientModule} from '@angular/common/http';
import { RatingGlowDirective } from './Directives/rating-glow.directive'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    BookingComponent,
    ExtrasComponent,
    FeaturesComponent,
    FeedbackComponent,
    BookingCardComponent,
    BookingDetailsComponent,
    BookingInfoComponent,
    ImportantNoticeComponent,
    OffersComponent,
    TravelBlogComponent,
    MainComponent,
    RatingGlowDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
