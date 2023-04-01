import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeveloperSectionComponent } from './developer-section/developer-section.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WhyHuiospayComponent } from './why-huiospay/why-huiospay.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'why-huiospay', component: WhyHuiospayComponent },
  { path: 'developer-section', component: DeveloperSectionComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
