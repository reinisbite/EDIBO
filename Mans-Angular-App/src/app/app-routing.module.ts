import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SlidersComponent } from './sliders/sliders.component';
import { SlidjoslaComponent } from './slidjosla/slidjosla.component';
import { BildesComponent } from './bildes/bildes.component';


const routes: Routes = [
  {path: 'Ķeksīš', component: CheckboxComponent},
  {path: 'Riņķotājs', component: SlidersComponent},
  {path: 'Slidjosla', component: SlidjoslaComponent},
  {path: 'Bildes', component: BildesComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
