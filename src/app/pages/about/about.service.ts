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
      'Certificate in Software Development with Internship',
      'Engim Torino',
      '2019 - 2020',
      'http://www.engimtorino.net/tecnico-di-sviluppo-software/'
    ),
    new InfoField(
      'Certificate in Graphic Operator and Web Designer',
      'FORIt Group',
      '260 h',
      ''
    ),
    new InfoField(
      'Diploma in Agricultural Sciences',
      'Cecchi Technical Agricultural Institute',
      'Sept. 2001 - June 2006',
      'https://iiscecchi.edu.it/piano-studi-ita/'
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
