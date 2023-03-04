import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isdashboard: boolean = false;
  isWordArea: boolean = false;
  ocultarNav: boolean = this.isdashboard || this.isWordArea;
}
