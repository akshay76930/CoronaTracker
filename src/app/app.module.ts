import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { WorldComponent } from './world/world.component';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { StatewiseComponent } from './statewise/statewise.component';
import { CountryComponent } from './country/country.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    WorldComponent,
    StatewiseComponent,
    CountryComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
