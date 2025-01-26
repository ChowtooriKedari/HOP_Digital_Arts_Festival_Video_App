import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { VideosComponent } from './videos/videos.component';
import { FormsModule } from '@angular/forms';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { TutorialVideoSelectionComponent } from './tutorial-video-selection/tutorial-video-selection.component';
import { TutorialInstructionComponent } from './tutorial-instruction/tutorial-instruction.component';

@NgModule({
  declarations: [
    AppComponent,
    VideosComponent,
    ContactUsComponent,
    WelcomeScreenComponent,
    TutorialVideoSelectionComponent,
    TutorialInstructionComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


