import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CountryComponent } from './country/country.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':slug', component: CountryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
