import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { 
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'about',
        loadComponent: () =>
          import('./content/about/about.component').then(
            (c) => c.AboutComponent
          ),
      },
      {
        path: 'portfolio',
        loadComponent: () =>
          import('./content/portfolio/portfolio.component').then(
            (c) => c.PortfolioComponent
          ),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./content/contact/contact.component').then(
            (c) => c.ContactComponent
          ),
      },
      {
        path: 'sup',
        loadComponent: () =>
          import('./content/sup/sup.component').then(
            (c) => c.SupComponent
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnfoldedCardRoutingModule {}
