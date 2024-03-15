import { CardsService } from './../../../../../../services/cards.service';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  animations: [
    trigger('slideInFromLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ])
  ],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  cards: Card[] = []
  @Input() cardColor: string | undefined = '';
  headerButtons: any = {
    'identity-button': false,
    'home-button': false,
    'about-button': false,
    'portfolio-button': false,
    'clients-button': false,
    'contact-button': false,
    'sup-button': false,
    'menu-button': false
  }
  hoverFlag: boolean = false;
  isMenuClicked: boolean = false;

  constructor( private router: Router, private cardsService: CardsService){

  }

  ngOnInit(): void {
    this.cards = this.cardsService.getCards();
  }

  isActive(route: string): boolean {
    return this.router.isActive(route, true)
  }

  toggleHoverState(id:string, event: MouseEvent): void{
    this.hoverFlag = !this.hoverFlag
    this.headerButtons[id] = !this.headerButtons[id]
  }

  menuOnClick(): void{
    this.isMenuClicked = true;
  }

  getRoute(title: string): string{
    if (title != "What's up")
      return `/info/${title.toLowerCase()}`
    else
      return `/info/sup`
  }

}
