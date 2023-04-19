import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LaboratoriComponent } from './laboratori/laboratori.component';
import { CodingRoboticaComponent } from './coding-robotica/coding-robotica.component';
import { ApprofondimentiComponent } from './approfondimenti/approfondimenti.component';
import { HightlightDirective } from './direttive/hightlight.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './loadingspinner/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LaboratoriComponent,
    CodingRoboticaComponent,
    ApprofondimentiComponent,
    HightlightDirective,
    AuthComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCarouselModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
