import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  animations: [
    trigger('fadeInOut', [
      state(
        'in',
        style({
          opacity: 1,
        })
      ),
      transition('void => *', [
        style({
          opacity: 0,
        }),
        animate(400),
      ]),
    ]),
    trigger('fadeIn', [
      state(
        'void',
        style({
          opacity: 0,
        })
      ),
      transition('void => *', [
        animate('400ms ease-in-out', style({ opacity: 1 })),
      ]),
    ]),
  ],

  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  cardColor: string | undefined = undefined;
  title: null | string = null;
  a: boolean =false;

  constructor(private cardsService: CardsService, private router: Router) {}

  ngOnInit(): void {
    this.title = this.router.url;

    if (this.router.url.split('/').length >= 2) {
      this.title = this.router.url.split('/')[2];
    } else {
      this.title = '';
    }
      this.cardColor =  this.cardsService.getCardByTitle(this.title)?.color;
  }


}

