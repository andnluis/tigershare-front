import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @ViewChild('sidebar') sidebar: ElementRef;
  @ViewChild('my_container') myContenedor: ElementRef;

  ngAfterViewInit() {
    
  }

  abrirNavLateral(){
    this.sidebar.nativeElement.classList.toggle("active-nav");
    this.myContenedor.nativeElement.classList.toggle("active-cont");
  }
}