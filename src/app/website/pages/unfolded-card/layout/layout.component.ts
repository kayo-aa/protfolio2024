import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/models/card.model';
import { CardsService } from 'src/app/services/cards.service';

@Component({
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

  warty(): void{
    this.a = !this.a
    console.log(this.a);
  }

}

