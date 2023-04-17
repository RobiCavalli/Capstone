import { Element } from '@angular/compiler';
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {

  constructor(private element: ElementRef) {
  }
//hostlistener decoratore che deve avere (un evento)
//mouseenter, il mouse va sopra

@HostListener('mouseenter') onMouseEnter(){
  this.cambiacolore("fuchsia")
 }
//mouseleave, il mouse si toglie
 @HostListener('mouseleave') onMouseLeave(){
   this.cambiacolore("pink")

 }

 cambiacolore(colore: string){
   this.element.nativeElement.style.backgroundColor =colore
 }

}
