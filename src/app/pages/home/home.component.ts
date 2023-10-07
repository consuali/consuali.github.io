import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('textAnimation', [
      state('start', style({
        transform: 'translateX(0)' // Posizione di partenza del testo
      })),
      state('end', style({
        transform: 'translateX(80%)' // Posizione finale del testo
      })),
      transition('start => end', animate('2s')) // Durata e tipo di animazione
    ])
  ]

})
export class HomeComponent {
  animationState = 'start'; // Inizializza lo stato dell'animazione
  ngOnInit() {
    // Attiva l'animazione dopo un breve ritardo (ad esempio, 1 secondo)
    setTimeout(() => {
      this.animationState = 'end';
    }, 1000);
  }
}
