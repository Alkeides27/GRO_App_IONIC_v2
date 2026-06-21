import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonButton } from '@ionic/angular/standalone';

/*
  Página de Inicio con interactividad liviana:
  - Saludo dinámico según la hora del dispositivo.
  - Botones de navegación rápida a Perfil y Contacto.
  - Contador de visitas persistente con localStorage.

  El saludo se calcula una vez en ngOnInit() con new Date().getHours()
  porque no hay razón para recalcularlo en cada ciclo de detección de
  cambios — la hora no cambia con frecuencia suficiente como para
  justificar ese overhead.
*/
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonButton, CommonModule]
})
export class InicioPage implements OnInit {

  greeting = '';
  visitCount = 0;

  constructor(private router: Router) { }

  ngOnInit() {
    // Calcular saludo según la hora local del dispositivo
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      this.greeting = 'Buenos días';
    } else if (hour >= 12 && hour < 19) {
      this.greeting = 'Buenas tardes';
    } else {
      this.greeting = 'Buenas noches';
    }

    // Contador de visitas persistente: leer, incrementar y guardar
    const stored = localStorage.getItem('gro_visitas');
    this.visitCount = stored ? parseInt(stored, 10) + 1 : 1;
    localStorage.setItem('gro_visitas', this.visitCount.toString());
  }

  goToProfile() {
    this.router.navigate(['/informacion-personal']);
  }

  goToContact() {
    this.router.navigate(['/contacto']);
  }
}
