import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SlidersComponent } from './sliders/sliders.component'; 
@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    SlidersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
      

    