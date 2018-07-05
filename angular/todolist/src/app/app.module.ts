import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { CreateNotesComponent } from './create-notes/create-notes.component';
import { ServiceService } from './service.service';
import { ShowNotesComponent } from './show-notes/show-notes.component';
import { HomeComponent } from './home/home.component';
import { AlertsModule } from 'angular-alert-module';
const frontEndRoutes: Routes = [
  { path: 'notes', component: NotesComponent },

  { path: 'notes/create', component:  CreateNotesComponent },
 
  { path: 'notes/:id', component:  ShowNotesComponent },
 
  { path: '', component: HomeComponent },

]

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    CreateNotesComponent,
    ShowNotesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      frontEndRoutes,
       {enableTracing: true }
    ),
    AlertsModule.forRoot(),
    HttpClientModule,
    FormsModule,
  ],
  providers: [ServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
