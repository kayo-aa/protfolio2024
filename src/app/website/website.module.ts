import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CardComponentComponent } from './components/card-component/card-component.component';
import { AboutComponent } from './pages/about/about.component';


@NgModule({
  declarations: [
    HomeComponent,
    CardComponentComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule
  ]
})
export class WebsiteModule { }
