import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { PostserviceService } from './service/postservice.service'
import { TrailmapService } from './service/trailmap.service'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    JsonpModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAW5v5BdV8VRbWCc6puE0l_UKFuAj-8_bI'
    })
  ],
  providers: [PostserviceService, TrailmapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
