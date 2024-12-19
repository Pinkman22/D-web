import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ContactComponent } from './contact/contact.component';
import { PicSliderComponent } from './pic-slider/pic-slider.component';
import { enableDebugTools } from '@angular/platform-browser';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'home', component: FirstComponent },

  { path: 'about', component: SecondComponent },

  { path: 'contact', component: ContactComponent},
  
  { path: 'slider', component: PicSliderComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
