import { CardsService } from 'src/app/services/cards.service';
import { Component } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  card: Card | null = null;

  constructor(private cardsService: CardsService){

  }

  ngOnInit(): void {
    this.card = this.cardsService.getCardByTitle('about');
  }

  /*
    cuando clickees la carta, todas las cartas tienen en común que el contenido se desarrolla en un recuadro que al hacer scroll, solo se scrolea el contenido del recuadro. A su vez, cuentan con un footer y header interno. Eso tienen en comun todas las cartas.
    Lo que varía es el contendio, así que habría que plantear:
    un componente más de layout que tenga el footer externo, lo necesario para que el recuadro interno haga scroll solo del contenido que tiene dentro, y que almacene en el div que simula ser el recuadro a tres compoenentes:
    
    el header interno
    cada contenido de las diferentes cartas (componentes individuales)
    el footer interno

    las carpetas podrían distribuírse de la siguiente manera:
    website/pages/unflodedCard => tiene el layout mencionado
    
  */

}
