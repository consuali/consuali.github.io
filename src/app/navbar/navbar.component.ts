import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  deviceType: boolean;

  constructor(private router: Router, private platform: Platform) {
    this.deviceType = this.isMobileDevice();
  }

  handleButtonClick(page: string) {
    // Puoi navigare a una pagina specifica quando un pulsante viene cliccato.
    if (page === 'Pagina1') {
      this.router.navigate(['/pagina1']);
    } else if (page === 'Pagina2') {
      this.router.navigate(['/pagina2']);
    }
    // Aggiungi ulteriori azioni per altri pulsanti come necessario.
  }
  isMobileDevice(): boolean {
    return this.platform.is('mobile');
  }
}
