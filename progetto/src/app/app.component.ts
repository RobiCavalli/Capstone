import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from './auth/authservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
constructor (public authService: AuthserviceService){

}

  ngOnInit(): void {
  this.authService.controluser();
  }
  title = 'progetto';



  }


