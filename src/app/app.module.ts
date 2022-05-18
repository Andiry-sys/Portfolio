import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkilsComponent } from './skils/skils.component';
import { PayForJobComponent } from './pay-for-job/pay-for-job.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    SkilsComponent,
    PayForJobComponent
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
