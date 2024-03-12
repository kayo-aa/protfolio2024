import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { CardsService } from 'src/app/services/cards.service';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  AnimationEvent,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fade', [
      state(
        'null',style({})
      ),
      state(
        'selected',
        style({
          transform: '{{ transformation }}',
        }),
        { params: { transformation: '' } }
      ),
      state(
        'notSelected',
        style({
          opacity: 0,
        })
      ),
      transition('null => notSelected', animate('200ms')),
      transition('null => selected', animate('400ms 500ms ease')),
    ]),
    ],
})
export class HomeComponent implements OnInit {
  cards: Card[] = [];
  isHoveredArray: boolean[] = [];
  selectedCardIndex: number | null = null;
  selectedCardName: string = ''
  transformation: string = '';
  hide: boolean = false;

  constructor(private cardsService: CardsService) {}

  ngOnInit(): void {
    this.cards = this.cardsService.getCards();
  }

  toggleHover(index: number): void {
    this.isHoveredArray[index] = !this.isHoveredArray[index];
  }

  onCardClick(index: number): void {
    this.selectedCardIndex = index;
    this.hide = !this.hide;
  }

  setTransform(index?: number): string {
    switch (index) {
      case 0:
        return 'translate(0%, 58.5%) scale3d(3.08, 2.6, 1)';
        break;
        case 1:
          return 'translate(-104%, 58.5%) scale3d(3.08, 2.6, 1)';
          break;
          case 2:
            return `translate(-104%, -50%) scale3d(3.08, 2.6, 1)`;
            break;
      case 3:
        return 'translate(0%, -50%) scale3d(3.08, 2.6, 1)'
        break;
        case 4:
        return `translate(104%, -50%) scale3d(3.08, 2.6, 1)`;
        break;
        default:
          return '';
          break;
        }
  }
  
  cardSelected(index?: number): string {
    if (this.selectedCardIndex !== null) {
      this.transformation = this.setTransform(index);
      return this.selectedCardIndex === index ? 'selected' : 'notSelected';
    } else {
      return 'null';
    }
  }

  onAnimationDone(event: AnimationEvent, index: number): void {
    if(event.toState === 'selected'){
      this.selectedCardName = this.cards[index].title
    }
    
  }
}
