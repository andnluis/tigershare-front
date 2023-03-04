import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  isdashboard: boolean = false;
  isWordArea: boolean = false;
  ocultarFooter: boolean = this.isdashboard || this.isWordArea;
}
