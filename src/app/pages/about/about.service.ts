import { InfoField } from '../../models/infoField.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AboutService {
  private works: InfoField[] = [
    new InfoField('Fullstack Developer', 'Lilitech', 'May. 2021 - Present', 'https://www.lilitech.com'),
    new InfoField('Junior Fullstack Developer', 'Synthesis3', 'July. 2021 - May. 2021', 'https://www.synthesis3.com'),
    new InfoField('Junior Fullstack Developer', 'Aimage', 'Jan - July. 2021', 'https://www.aimage.it/'),
 
  ];

  private education: InfoField[] = [
    new InfoField(
      'Masters in Advanced Videogame Development',
      'Campus La Salle',
      'Oct. 2018 - July 2019',
      'https://www.salleurl.edu/ca/estudis/master-en-desenvolupament-avancat-de-videojocs'
    ),
    new InfoField(
      'Multimedia Engineering Degree',
      'Campus La Salle',
      'Sept. 2013 - June 2018',
      'https://www.salleurl.edu/ca/estudis/grau-en-enginyeria-multimedia-mencio-en-videojocs'
    ),
    new InfoField(
      'Sound Technician',
      'EMAV',
      'Sept. 2011 - June 2013',
      'https://www.emav.com/oferta-educativa/cicles-formatius-de-grau-superior/so/'
    )
  ];

  private languages: InfoField[] = [
    new InfoField('Italian', 'Bilingual or native competence', ' ', ' '),
    new InfoField('English', 'Profesional competence', ' ', ' ')
  ];

  getEducation(): InfoField[] {
    return this.education;
  }

  getWorks(): InfoField[] {
    return this.works;
  }

  getLanguages(): InfoField[] {
    return this.languages;
  }
}
