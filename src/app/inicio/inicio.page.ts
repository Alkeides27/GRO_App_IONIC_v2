import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonButton } from '@ionic/angular/standalone';

/*
  Este componente controla la página de Inicio de mi aplicación.
  Es la primera vista que se muestra cuando se abre la app, así que
  decidí mantenerla simple y enfocada en presentarme de forma clara
  y dar acceso rápido a las otras secciones.
  La lógica aquí es mínima porque el contenido es estático; solo
  manejo la navegación al hacer clic en el botón principal.
*/
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonButton, CommonModule, FormsModule, RouterLink]
})
export class InicioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
