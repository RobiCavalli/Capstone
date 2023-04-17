import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthserviceService } from './authservice.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  isLoading = false;
  error: any;

  //importo il authservice
  constructor(private authService: AuthserviceService) {}


  onSubmit(form: NgForm) {
    //estrarre i miei valori
    if (!form.valid) {
      return;
    }
    const name = form.value.name;
    const username = form.value.username;
    const email = form.value.email;
    const password = form.value.password;
    //true perchè stiamo inviando richiesta e caricando risposta
    this.isLoading = true;
      this.authService.signup(name, username, email, password).subscribe(
        (resData) => {
          console.log(resData);
          //di nuovo false perchè conclusa richiesta
          this.isLoading = false;
        },
       errorMessage => {
          console.log(errorMessage);
          this.error = errorMessage;
          this.isLoading = false;

        }
      );
    }


  }
