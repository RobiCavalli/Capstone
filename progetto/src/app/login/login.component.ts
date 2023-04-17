import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthserviceService } from '../auth/authservice.service';
import { User } from '../auth/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  error: any;
  constructor(public authService: AuthserviceService) {}


  onSubmit(form: NgForm) {
    //estrarre i miei valori
    if (!form.valid) {
      return;
    }
    const username = form.value.username;
    const password = form.value.password;
    //true perchè stiamo inviando richiesta e caricando risposta

      this.authService.login(username, password).subscribe(
        (resData)=> {
          console.log(resData);
          let a : User = <User> resData ;
          this.authService.user.accessToken = a.accessToken;
          console.log(this.authService.user)

        },
        errorMessage => {
          console.log(errorMessage);
          this.error = errorMessage;

        }
      );
    }

  logout(){
    this.authService.logout();
    console.log("funziona")
  }





}
