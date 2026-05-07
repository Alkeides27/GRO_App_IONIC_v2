import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonIcon, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, logoWhatsapp, logoGithub, locationOutline, chevronForwardOutline } from 'ionicons/icons';

/*
  Esta es mi página de contacto. Aquí decidí agrupar mis canales
  de comunicación usando una lista de Ionicons dentro de una tarjeta
  glassmorphism para mantener la consistencia con la paleta oscura.
  Además, añadí un botón directo que abre el cliente de correo.
*/
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonIcon, IonButton, CommonModule, FormsModule]
})
export class ContactoPage implements OnInit {

  constructor() {
    addIcons({ mailOutline, logoWhatsapp, logoGithub, locationOutline, chevronForwardOutline });
  }

  ngOnInit() {
  }

}
