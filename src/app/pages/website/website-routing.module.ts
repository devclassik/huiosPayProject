import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WhyHuiospayComponent } from './why-huiospay/why-huiospay.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'why-huiospay', component: WhyHuiospayComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
