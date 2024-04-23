import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private cardConfigurations: Card[] = [
    {
      title: 'About',
      description: 'Discover how I work.',
      image: 'assets/img/about-main.png',
      color: '#244C59',
      hoverColor: '#1E3F4A',
    },
    {
      title: 'Portfolio',
      description: 'Transforming ideas into reality with purposeful coding.',
      image: 'assets/img/portfolio-main.png',
      color: '#243B42',
      hoverColor: '#1e3137',
    },
    {
      title: `What's up`,
      description: 'phrase',
      image: 'assets/img/sup-main.png',
      color: '#384D48',
      hoverColor: '#2f403c',
    },
    {
      title: 'Contact',
      description: `Let's develop elegant and functional products!`,
      image: 'assets/img/contact-main.png',
      color: '#0B7059',
      hoverColor: '#095d4a',
    },
    {
      title: 'Clients',
      description: 'phrase',
      image: 'assets/img/clients-main.png',
      color: '#3C8F7B',
      hoverColor: 'rgb(51, 120, 103)',
    },
  ];
  // private cards: Card[] = this.cardConfigurations.map((config) => ({...config})) as Card[];
  /*
  utilizo el método map para iterar sobre ese array y usar la expresión ({ ...config }), que crea un objeto con las mismas propiedades y valores que el objeto que estoy iterando. Para devolver una expresión de objeto literal, se requieren paréntesis alrededor de la expresión. El as Card[] es una afirmación de tipo para asegurarnos de que el resultado sea un array de objetos Card.
  */
  constructor() {}

  getCards(): Card[] {
    return this.cardConfigurations;
  }

  getCardByTitle(title: string): Card | null{
    for (const card of this.cardConfigurations) {
      if (card.title.toLocaleLowerCase() === title.toLocaleLowerCase()) {
        return card;
      }
    }
    return null
  }
  
}
