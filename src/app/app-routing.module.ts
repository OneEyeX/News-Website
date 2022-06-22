import { TopheadingComponent } from './topheading/topheading.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnewsComponent } from './technews/technews.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';

const routes: Routes = [
  { path: '', component: TopheadingComponent }, //topHeading home
  { path: 'tech', component: TechnewsComponent }, //tech News
  { path: 'business', component: BusinessnewsComponent }, //business News
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
