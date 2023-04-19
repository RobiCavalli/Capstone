import { Component } from '@angular/core';
import { AuthserviceService } from '../auth/authservice.service';

@Component({
  selector: 'app-approfondimenti',
  templateUrl: './approfondimenti.component.html',
  styleUrls: ['./approfondimenti.component.scss']
})
export class ApprofondimentiComponent {
  constructor(public authService: AuthserviceService) {}

  public controllo(){
    console.log("controllo" + this.authService.isLogged);

    return this.authService.isLogged;
  }











}
