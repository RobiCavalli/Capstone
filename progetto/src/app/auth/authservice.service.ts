import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput, Subject, catchError, pipe, tap, throwError } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthserviceService {
  //memorizza utente autenticato come oggetto
  user = new Subject<User>();
  handleError!: (err: any, caught: Observable<Object>) => ObservableInput<any>;
  //metodo d'iscrizione e inviare richiesta all url di iscrizione
  constructor(private http: HttpClient) {}

  signup(name: string, username: string, email: string, password: string) {
    return(
      this.http
        .post('http://localhost:8080/api/auth/signup', {
          name: name,
          username: username,
          email: email,
          password: password,
        })
        //errore
        .pipe(catchError(this.handleError), tap(resData =>
          {localStorage.setItem("user", JSON.stringify (resData))
        //creo il mio nuovo utente
        //const user = new User(resData.username, resData.password, resData._token, resData._tokenExpirationDate)
        }))
      )
  }

// per ts login
  login(username: string, password: string) {
    return this.http.post(' http://localhost:8080/api/auth/login', {
      username: username,
      password: password,
    })
    .pipe(tap((resData) => {localStorage.setItem("user", JSON.stringify (resData))}));
  }
}
