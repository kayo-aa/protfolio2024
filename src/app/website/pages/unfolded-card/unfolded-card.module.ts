import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnfoldedCardRoutingModule } from './unfolded-card-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { FooterComponent } from './layout/components/footer/footer.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    UnfoldedCardRoutingModule
  ]
})
export class UnfoldedCardModule { }
