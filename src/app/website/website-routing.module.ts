import { UnfoldedCardModule } from './pages/unfolded-card/unfolded-card.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  {
    path: 'info',
    loadChildren: () =>
    import('./pages/unfolded-card/unfolded-card.module').then((m) => m.UnfoldedCardModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule {
  
}
