import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Laboratorio {
  id: number;
  titolo: string;
  url: string;
  clientiSet: any[];
}
@Component({
  selector: 'app-laboratori',
  templateUrl: './laboratori.component.html',
  styleUrls: ['./laboratori.component.scss']
})
export class LaboratoriComponent implements OnInit {
laboratori: Laboratorio[] = [];
show: boolean = false;

 showHidden(): void{
 this.show =! this.show;
 }

constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Laboratorio[]>('http://localhost:8080/api/auth/laboratorio')
      .subscribe(data => {
        this.laboratori = data;
      });
  }

 }



