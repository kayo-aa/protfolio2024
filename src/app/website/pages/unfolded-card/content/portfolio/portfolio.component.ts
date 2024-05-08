import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{
  informationElementHeight: string = '0px';

  ngOnInit() {
    this.updateInformationElementHeight();
  }

  private updateInformationElementHeight() {
    const element = document.querySelector('#information-portfolio');
    if (element) {
      this.informationElementHeight = `${element.clientHeight+365}px`;
      console.log(this.informationElementHeight);
      
    }
  }
}

