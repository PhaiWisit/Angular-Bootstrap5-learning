import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LinetodayComponent } from './pages/homepage/home-component/linetoday/linetoday.component'; 
import { MessengerappComponent } from './pages/homepage/home-component/messengerapp/messengerapp.component'; 
import { CoverComponent } from './pages/homepage/home-component/cover/cover.component'; 
import { CardComponent } from './pages/homepage/home-component/messengerapp/card/card.component'; 
import { OurservicesComponent } from './pages/homepage/home-component/ourservices/ourservices.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    LinetodayComponent,
    MessengerappComponent,
    CoverComponent,
    CardComponent,
    OurservicesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
