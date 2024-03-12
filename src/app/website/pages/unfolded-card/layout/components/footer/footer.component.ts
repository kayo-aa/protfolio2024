import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent{
  @Input() cardColor: string | undefined = '';
  hoverFlag: boolean = false;
  footerButtons: any = {
    'talk-button': false,
    'home-button': false,
    'about-button': false,
    'portfolio-button': false,
    'clients-button': false,
    'contact-button': false,
    'sup-button': false,
  }

  constructor( private router: Router){

  }

  isActive(route: string): boolean {
    return this.router.isActive(route, true)
  }

  toggleHoverState(id:string, event: MouseEvent): void{
    this.hoverFlag = !this.hoverFlag
    this.footerButtons[id] = !this.footerButtons[id]
  }

}
