import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { ServicesComponent } from './pages/services/services';
import { Platforms } from './pages/platforms/platforms';
import { Industries } from './pages/industries/industries';
import { About } from './pages/about/about';
import { Login } from './auth/login/login';
import { Signup } from './auth/signup/signup';
import { Landing } from './landing/landing/landing';
import { OnboardingAssistant } from './pages/onboarding-assistant/onboarding-assistant/onboarding-assistant';
import { FresherResourcesComponent } from './fresher-resources/fresher-resources';
import { PlacementTrackerComponent } from './placement-tracker/placement-tracker';

export const routes: Routes = [
  // Landing page (first load for login/signup)
  { path: '', component: Landing },

  // After login, Home page with two cards
  { path: 'home', component: Home },

  // Other pages
  { path: 'services', component: ServicesComponent },
  { path: 'platforms', component: Platforms },
  { path: 'industries', component: Industries },
  { path: 'about', component: About },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },

  // Dynamic feature components
{ path: 'onboarding-assistant', component: OnboardingAssistant },

    { path: 'fresher-resources', component: FresherResourcesComponent},

    { path: 'placement-tracker', component: PlacementTrackerComponent },

  // Fallback
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
