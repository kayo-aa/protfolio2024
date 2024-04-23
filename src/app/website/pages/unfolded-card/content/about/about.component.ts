import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  informationElementHeight: string = '0px'
  
  ngOnInit() {
    this.updateInformationElementHeight()
    
  }
 
  private updateInformationElementHeight() {
    const element = document.querySelector('#information-about');
    console.log(element);
    
    if (element) {
      this.informationElementHeight = `${element.clientHeight}px`;
    }
  }
}
