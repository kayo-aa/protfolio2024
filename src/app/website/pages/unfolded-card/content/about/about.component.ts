import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit{
  informationElementHeight: string = '0px';

  ngAfterViewInit() {
    const element = document.querySelector('#information-container'); 
    if (element) {
      this.informationElementHeight = `${element.clientHeight}px`;
    }
  }
  
}
