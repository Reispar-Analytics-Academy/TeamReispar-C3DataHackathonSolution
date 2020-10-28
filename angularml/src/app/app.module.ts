import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CtscanComponent } from './ctscan/ctscan.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{  MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    CtscanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule, 
  MatIconModule, MatCardModule, 
  MatButtonModule, MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
