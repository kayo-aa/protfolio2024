import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  @Input() cardColor: string | undefined = '';
  headerButtons: any = {
    'identity-button': false,
    'home-button': false,
    'about-button': false,
    'portfolio-button': false,
    'clients-button': false,
    'contact-button': false,
    'sup-button': false,
  }
  hoverFlag: boolean = false;

  constructor( private router: Router){

  }

  isActive(route: string): boolean {
    return this.router.isActive(route, true)
  }

  toggleHoverState(id:string, event: MouseEvent): void{
    this.hoverFlag = !this.hoverFlag
    this.headerButtons[id] = !this.headerButtons[id]
  }

}
