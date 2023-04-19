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
    if (this.authService.isLogged ){
      console.log("bloccosubmit");
      return;
    }

    const username = form.value.username;
    const password = form.value.password;
    //true perchè stiamo inviando richiesta e caricando risposta

      this.authService.login(username, password).subscribe(
        (resData)=> {
          console.log(resData);
          let a : User = <User> resData ;
          console.log(this.authService.user)
          this.authService.user.accessToken = a.accessToken;
        },
        errorMessage => {
          console.log(errorMessage);
          this.error = errorMessage;

        }
      );
    }

  logout(){
    this.authService.logout();
  }





}
