import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonCard, IonCardContent, IonChip, IonLabel } from '@ionic/angular/standalone';

/*
  En esta vista presento mi información académica y profesional.
  Decidí dividirla en tarjetas de vidrio (glassmorphism) para agrupar
  visualmente cada sección (perfil, stack, proyectos, intereses)
  manteniendo la estética limpia y moderna.
*/
@Component({
  selector: 'app-informacion-personal',
  templateUrl: './informacion-personal.page.html',
  styleUrls: ['./informacion-personal.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonCard, IonCardContent, IonChip, IonLabel, CommonModule, FormsModule]
})
export class InformacionPersonalPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
