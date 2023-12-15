import { Component, Input, SimpleChanges } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card-component',
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
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css'],
})
export class CardComponentComponent {
  @Input() hide: boolean = false;
  @Input() card: Card | null = null;
  @Input() isHovered: boolean = false;
  @Input() selectedCardName: string = ''
  @Input() test = 0

  constructor(private router: Router){

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedCardName'] && changes['selectedCardName'].currentValue != '') {
      this.router.navigate([changes['selectedCardName'].currentValue.toLowerCase()])
    }
  }
}
