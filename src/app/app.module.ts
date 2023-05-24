import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/sever.component';
import { ServeresComponent } from './serveres/serveres.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServeresComponent
  ],
  imports: [
    BrowserModule
    // FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
