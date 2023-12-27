import { Component } from '@angular/core';
import { Contact } from './contact.model';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contacts = [
    new Contact('/cfadda', 'https://www.linkedin.com/in/consuelo-fadda/', 'linkedin', 'linkedin'),
    new Contact('consuali@', 'mailto:consuali@gmail.com', 'email', 'envelope'),
    new Contact('/consuali', 'https://github.com/consuali', 'github', 'github'),
  
  ];
}
