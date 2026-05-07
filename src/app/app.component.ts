import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeOutline, homeSharp, personOutline, personSharp, chatbubbleEllipsesOutline, chatbubbleEllipsesSharp } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {

  /*
    En lugar de escribir cada botón del menú directamente en el HTML
    (lo cual sería repetitivo y difícil de mantener), creé este arreglo
    de objetos llamado 'appPages'. Cada objeto representa un ítem del
    menú lateral con tres propiedades: el título visible, la ruta de
    navegación y el icono de Ionicons que acompaña al texto.
  */

  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Información Personal', url: '/informacion-personal', icon: 'person' },
    { title: 'Contacto', url: '/contacto', icon: 'chatbubble-ellipses' }
  ];

  constructor() {
    addIcons({ homeOutline, homeSharp, personOutline, personSharp, chatbubbleEllipsesOutline, chatbubbleEllipsesSharp });
  }
}
