import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SlidersComponent } from './sliders/sliders.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SlidjoslaComponent } from './slidjosla/slidjosla.component';
import { BildesComponent } from './bildes/bildes.component';

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    SlidersComponent,
    CheckboxComponent,
    SlidjoslaComponent,
    BildesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


