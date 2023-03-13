import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit{

  formularioInicioSesion = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/')]),
    password: new FormControl('', [Validators.required, Validators.maxLength(30)])
  });
  
  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  iniciarSesion() {
    console.log(this.formularioInicioSesion);
  }
}
