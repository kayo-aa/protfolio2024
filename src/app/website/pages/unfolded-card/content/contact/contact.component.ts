import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  informationElementHeight: string = '0px';

  ngOnInit() {
    this.updateInformationElementHeight();
    console.log(this.informationElementHeight);
  }

  private updateInformationElementHeight() {
    const element = document.querySelector('#information-contact');
    if (element) {
      this.informationElementHeight = `${element.clientHeight}px`;
    }
  }

  redirectTo(url: string) {
    window.open(url, '_blank');
  }
}
