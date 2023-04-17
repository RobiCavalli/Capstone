import { Component } from '@angular/core';

@Component({
  selector: 'app-laboratori',
  templateUrl: './laboratori.component.html',
  styleUrls: ['./laboratori.component.scss']
})
export class LaboratoriComponent{

 show: boolean = false;
 https: any;

 showHidden(): void{
 this.show =! this.show;
 }

   images = [944, 1011, 984].map((n) => `https://via.placeholder.com/700x500`);
 }



