import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sup.component.html',
  styleUrls: ['./sup.component.css']
})
export class SupComponent {
  informationElementHeight: string = '0px';
  hoverFlag: boolean = false;
  infoCards: any={
    
  }
  ngOnInit() {
    this.updateInformationElementHeight();
  }

  private updateInformationElementHeight() {
    const element = document.querySelector('#information-sup');
    if (element) {
      console.log(element.clientHeight);
      
      this.informationElementHeight = `${element.clientHeight}px`;
      console.log(this.informationElementHeight);
    }
  }

  redirectTo(url: string) {
    window.open(url, '_blank');
  }

  toggleHoverState(infoCard: string): void {
    this.hoverFlag = !this.hoverFlag;
    this.infoCards[infoCard] = !this.infoCards[infoCard];
  }

}
