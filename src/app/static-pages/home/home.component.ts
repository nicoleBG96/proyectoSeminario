import { Component, OnInit } from '@angular/core';
import { Text } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content: string;

  constructor() { }

  ngOnInit() {
  }

  changeContent(value) {
    switch (value) {
      case 'historia':
        // tslint:disable-next-line:max-line-length
        this.content = 'El centro infantil “San Antonio” es una de las obras sociales de la iglesia que lleva el mismo nombre, actualmente funciona en la Av. Ayacucho esq. Calle Tarata. El centro funciona como guardería para los hijos de los comerciantes del mercado “La Cancha”, este opera como guardería, pero también se encarga de la educación y el desarrollo de los niños según sus edades. El centro cuenta con el aporte de las pensiones de los niños que asisten y con las donaciones que realiza la iglesia “San Antonio”. A continuación, se describen los procedimientos que se encuentran involucrados en el proceso de seguimiento al desarrollo de los niños y de la administración de finanzas.';
        break;
      case 'vision':
        this.content = 'vision';
        break;
      case 'mision':
        this.content = 'mision';
        break;
    }
  }

}