import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideosComponent } from './videos/videos.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { TutorialVideoSelectionComponent } from './tutorial-video-selection/tutorial-video-selection.component';
import { TutorialInstructionComponent } from './tutorial-instruction/tutorial-instruction.component';
const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }, // Default redirect to home
  { path: 'home', component: VideosComponent },         // Home route
  { path: 'contact', component: ContactUsComponent },   // Contact Us route
  { path: 'welcome', component: WelcomeScreenComponent },
  { path: 'tutorial-video-selection', component: TutorialVideoSelectionComponent },
  { path: 'tutorial-instruction', component: TutorialInstructionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}