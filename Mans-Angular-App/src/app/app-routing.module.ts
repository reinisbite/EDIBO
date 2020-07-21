import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SlidersComponent } from './sliders/sliders.component';
import { SlidjoslaComponent } from './slidjosla/slidjosla.component';
import { BildesComponent } from './bildes/bildes.component';
import { CurrencyComponent } from './currency/currency.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {path: 'Ķeksīš', component: CheckboxComponent},
  {path: 'Riņķotājs', component: SlidersComponent},
  {path: 'Slidjosla', component: SlidjoslaComponent},
  {path: 'Bildes', component: BildesComponent},
  {path: 'valūta', component: CurrencyComponent},
  {path: 'Laiks', component: WeatherComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
